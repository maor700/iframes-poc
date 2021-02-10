import React, { useEffect, useState } from "react";
import { v1 } from "uuid";
import { GET_DATA_EVENT_NAME } from "./AsyncMessage";
import { useCreateIframeEndPoint } from "./useAsyncMessage";

export const AsyncIframe = () => {
    const [str, setStr] = useState<string>("123fdfgfd");
    const [loading, setloading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
    }, []);

    useCreateIframeEndPoint(GET_DATA_EVENT_NAME, window, async (message) => {
        return new Promise((resolve) => {
            setloading(true)
            const res = v1();
            setTimeout(() => {
                setStr(res);
                setloading(false)
                resolve(res);
            }, 5000 * Math.random())
        })
    })

    return (
        <div>
            <h3>{title}</h3>
            <div className="field">
                {loading ? <div>Loading....</div> : str}
            </div>
        </div>
    )
}