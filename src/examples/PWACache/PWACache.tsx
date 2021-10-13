import React, { useCallback, useEffect, useRef, useState } from "react";
import { Resizable, ResizableBox } from 'react-resizable';
import { IframeCross } from "./IframeCross";
(window as any).test = {a:function(){console.log("works");
}}
const PWACache = () => {
    const oneRef = useRef(null);
    const [wh, setWh] = useState<number[]>([200, 200]);
    return (
        <div className="con">
            <h2>PWA Cache</h2>
            <iframe style={{ border: "1px solid red", width: wh[0], height: wh[1] }} title="one" ref={oneRef} id="one" src="/PWA_Cache_iframe?title=iframe" />
        <IframeCross src={"http://localhost:3333/build/assets/somePage.html"}></IframeCross>
        </div>
    )
}

export default PWACache;