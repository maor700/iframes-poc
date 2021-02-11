import React, { useCallback, useEffect, useRef, useState } from "react";
import { Resizable, ResizableBox } from 'react-resizable';

const PWACache = () => {
    const oneRef = useRef(null);
    const [wh, setWh] = useState<number[]>([200, 200]);
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            // Use the window load event to keep the page load performant
            navigator.serviceWorker.register("./service-worker.js")
                .then(function (registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                });
        }
    }, []);
    return (
        <div className="con">
            <h2>PWA Cache</h2>
            <iframe style={{ border: "1px solid red", width: wh[0], height: wh[1] }} title="one" ref={oneRef} id="one" src="/PWA_Cache_iframe?title=iframe" />
        </div>
    )
}

export default PWACache;