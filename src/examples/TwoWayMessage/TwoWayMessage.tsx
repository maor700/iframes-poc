import React, { useCallback, useEffect, useRef, useState } from "react";
import { isString } from "util";
import "./TwoWayMessage.css";
const TwoWayMessage = () => {
    const [someValue, setSomeValue] = useState<string>('');
    const oneRef = useRef<HTMLIFrameElement>(null);
    const twoRef = useRef<HTMLIFrameElement>(null);

    const handler = useCallback(({ data }) => {
        if (isString(data)) {
            setSomeValue(data);
        }
    }, [])

    useEffect(() => {
        window.addEventListener("message", handler);
        return () => {
            window.removeEventListener("message", handler);
        }
    }, []);

    useEffect(() => {
        sendValue(someValue);
    }, [someValue])

    const sendValue = (val: string) => {
        const iframesWin = [oneRef.current?.contentWindow, twoRef.current?.contentWindow];
        iframesWin?.forEach((win) => win?.postMessage(`${val}`, "*"));
    }

    return (
        <div className="con">
            <div className="field">
                <label htmlFor="somVal">Type your value</label>
                <input type="text" name="somVal" value={someValue} onChange={({ target }) => setSomeValue(target.value)} />
            </div>
            <iframe title="one" ref={oneRef} id="one" src="/iframe1?title=iframeChild1" />
            <iframe title="two" ref={twoRef} id="two" src="/iframe1?title=iframeChild2" />
        </div>
    )
}

export default TwoWayMessage;