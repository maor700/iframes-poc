import React, { FC, useEffect, useState } from "react";
export const IframeOne = () => {
    const [str, setStr] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
        window.addEventListener("message", (ev) => { setStr(ev?.data) }, false);
    }, []);

    const sendToParent = (val: string) => {
        window?.parent?.postMessage(`${val}`, "*")
    }

    return (
        <>
            <h3>{title}</h3>
            <div className="field">
                <input type="text" value={str} onChange={({ target }) => sendToParent(target.value)} />
            </div>
        </>
    )
}