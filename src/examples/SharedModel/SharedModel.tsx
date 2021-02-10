import React, { useCallback, useEffect, useRef, useState } from "react";
import { isString } from "util";
import { CalcProvider } from "../../providers/CalcProvider";
import "./SharedModel.css";
const TwoWayMessage = () => {
    const [someValue, setSomeValue] = useState<string>('');
    const oneRef = useRef<HTMLIFrameElement>(null);
    const twoRef = useRef<HTMLIFrameElement>(null);


    useEffect(() => {
        (window as any).CalcProvider = new CalcProvider();
    }, []);

    return (
        <div className="con">
            <h2>Shared Model</h2>
            <iframe title="one" height={"300px"} ref={oneRef} id="one" src="/shared_model?title=iframeChild1" />
            <iframe title="two" height={"300px"} ref={twoRef} id="two" src="/shared_model?title=iframeChild2" />
        </div>
    )
}

export default TwoWayMessage;