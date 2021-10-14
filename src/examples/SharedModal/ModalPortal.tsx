import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useCallback } from "react";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import sharedModalCss from "!!raw-loader!./SharedModal.css";

export const ModalPortal: FC<{ css: string, name: string, isOpen?: boolean, position?: { x: number, y: number } }> = ({ name, css, children }) => {
    const [modalElm, setModalElm] = useState<any>(null);

    useEffect(() => {
        console.log(css);
        init(css);
    }, []);

    const init = useCallback((css: string) => {
        const hostDoc = getHostDocument();
        const modalElm = document.createElement("div");
        modalElm.id = name;
        modalElm.classList.add(name);
        const shadowDom = modalElm.attachShadow({ mode: "closed" });
        var style = document.createElement('style')
        style.innerHTML = css + sharedModalCss;
        shadowDom.appendChild(style);
        setModalElm(shadowDom);
        hostDoc.body?.append(modalElm);
    }, [])

    return modalElm && ReactDOM.createPortal(
        children,
        modalElm
    );
}

const getHostDocument = () => window?.parent?.document ?? window.document;
