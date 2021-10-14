import { useState, useEffect } from "react"

export const useCssAsStringLoader = (cssFiles: string[]): string => {
    const [finalCss, setFinalCss] = useState<string>('');

    useEffect(() => {
        cssFiles.forEach(cssFilePath => {
            setFinalCss(finalCss + (atob(cssFilePath.split("base64,")?.[1] ?? '')));
        });
    },[]);

    return finalCss
}