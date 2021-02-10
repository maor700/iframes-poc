
import { RefObject, useCallback, useEffect } from "react";
import { v1 } from "uuid";

const TIME_OUT = 10000;

export interface IframeMessageEvent<T = any> {
    requestId?: string,
    eventName: string,
    payload?: T,
    errors?: string[]
}

export const getEndPointEventNames = (endPointName: string): { req: string, res: string, error: string } => {
    return { req: `${endPointName}_req`, res: `${endPointName}_res`, error: `${endPointName}_error` }
}

export async function fetchFromIframe<T = any, S = any>(message: IframeMessageEvent<T>, targetWin: Window): Promise<S> {
    const { eventName, payload } = message;
    const { req, res, error } = getEndPointEventNames(eventName);
    const eventsNames = [req, error];
    const token = v1();
    return new Promise((resolve, reject) => {
        const senderWin = targetWin?.parent;
        const timeoutCleaner = setTimeout(function () {
            reject(["timeout"]);
            _clean();
        }, TIME_OUT);
        const _clean = () => {
            clearTimeout(timeoutCleaner);
            senderWin?.removeEventListener("message", onMessageHandler);
        }
        const onMessageHandler: (this: Window, ev: MessageEvent<IframeMessageEvent<S>>) => any = ({ data }) => {
            const { eventName, payload, requestId, errors } = data;
            if (!eventsNames.includes(eventName) && requestId === token) return;
            console.log(`sender onmassage ${eventName} handler call`);

            switch (eventName) {
                case res: _clean(); console.log("resolved"); payload && resolve(payload); break;
                case error: _clean(); console.log("rejected"); reject(errors); break;
            }
        }
        console.log("Event listener on Window");
        senderWin.addEventListener("message", onMessageHandler);
        console.log(`Event ${req} posted to iframe`);
        targetWin.postMessage({ eventName: req, payload, requestId: token }, "*");

    })
}

export const useCreateIframeEndPoint = (endPoint: string, iframeWindow: Window, handler: (message: any) => Promise<any>) => {
    const { req, res, error } = getEndPointEventNames(endPoint);

    const onMessageHandler: (this: Window, ev: MessageEvent<any>) => any = useCallback((ev) => {
        const { requestId, payload, eventName, errors } = ev?.data;
        let iframeWin = iframeWindow;
        let senderWin = iframeWin?.parent;
        console.log("handler call");
        if (eventName !== req) return;
        handler(payload)
            .then((data) => {
                senderWin?.postMessage({ eventName: res, requestId, payload: data }, "*")
            })
            .catch(() => {
                senderWin?.postMessage({ eventName: error, requestId, errors }, "*")
            })
    }, []);

    useEffect(() => {
        let iframeWin = iframeWindow
        let senderWin = iframeWin?.parent;
        if (!iframeWin || !senderWin) return;
        console.log(`Event listener on iframe`);
        iframeWin.addEventListener("message", onMessageHandler)
        return () => { console.log("unmounted"); iframeWin?.removeEventListener("message", onMessageHandler) }
    }, [])
}