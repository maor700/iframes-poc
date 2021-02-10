import React, { useEffect, useRef, useState } from "react";
import { fetchFromIframe, useCreateIframeEndPoint } from "./useAsyncMessage";


export const GET_DATA_EVENT_NAME = "GET_DATA";

const AsyncMessage = () => {
    const [someData, setSomeData] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const oneRef = useRef<HTMLIFrameElement>(null);
    const twoRef = useRef<HTMLIFrameElement>(null);

    const getData = async () => {
        setLoading(true);
        const all: Promise<string>[] = [];
        [oneRef, twoRef].forEach((ref) => {
            all.push(fetchFromIframe<any, any>({ eventName: GET_DATA_EVENT_NAME }, ref.current?.contentWindow as Window))
        });
        try {
            const result = await Promise.all(all);
            setSomeData(JSON.stringify(result));
        } catch (error) {
            setSomeData(JSON.stringify(error));
        }
        setLoading(false);
    }

    return (
        <div className="con">
            <h2>Async Massage</h2>
            <div className="field">
                <button onClick={async () => await getData()}>Give Me Your Data Please</button>
                <div className="data">
                    {loading && <div className="loader">Loading...</div>}
                    {!loading && <div className="loader">{someData}</div>}
                </div>
            </div>
            <iframe title="one" ref={oneRef} id="one" src="/asyncIframe?title=iframeChild1" />
            <iframe title="two" ref={twoRef} id="one" src="/asyncIframe?title=iframeChild2" />
        </div>
    )
}

export default AsyncMessage;