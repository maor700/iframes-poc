import React, { FC, useEffect, useMemo, useRef, useState } from "react";

(window as any).test = { a: 1 };

export const IframeCross: FC<{ src: string }> = ({ src }) => {
    const [html, setHtml] = useState<string>();
    const [url, setUrl] = useState<URL>();
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const newUrl = new URL(src);
        setUrl(newUrl);
    }, [src])

    useEffect(() => {
        fetch(src).then(function (response) {
            response.text().then((text) => {
                // const head = text.match(/<head>((.|\n)*?)<\/head>/);
                // let headContent = head?.[1];
                const htmlWithBase = text.replace(/<head>((.|\n)*?)<\/head>/, `<base href="${url?.origin}"/>$1`)
                setHtml(htmlWithBase);
            });
        });
    }, [url]);

    useEffect(() => {
        if (!html || !iframeRef.current) return;
        // iframeRef.current.contentWindow?.document.open();
        // iframeRef.current.contentWindow?.document.write(html);
        // iframeRef.current.contentWindow?.document.close();
    }, [html, iframeRef.current]);

    return (
        html ? <iframe ref={iframeRef} srcDoc={html}>
            <h2>Loading...</h2>
        </iframe> : null
    )
}

