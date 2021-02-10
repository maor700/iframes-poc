import React, { FC, useEffect, useState } from "react";
export const NotificationIframe = () => {
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
    }, []);

    return (
        <>
            <h3>{title}</h3>
            <button onClick={() => {
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        new Notification("Hi there!");
                    }
                });
            }}>Notifi Me</button>
        </>
    )
}