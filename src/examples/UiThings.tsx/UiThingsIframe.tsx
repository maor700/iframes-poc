import React, { FC, useEffect, useState } from "react";

export const UiThingsIframe = () => {
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
    }, []);

    return (
        <>
            <h3>{title}</h3>
            <div className="">qwerawefawerraw</div>
        </>
    )
}