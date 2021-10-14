import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import sharedModalCss from "!!raw-loader!./SharedModal.css";

export const ModalPortal: FC<{ css: string, name: string, isOpen?: boolean, position?: { x: number, y: number } }> = ({ name, css, children }) => {
    const [modalElm, setModalElm] = useState<any>(null);

    useEffect(() => {
        const hostDoc = getHostDocument();
        const modalElmTemp = document.createElement("div");
        modalElmTemp.id = name;
        modalElmTemp.classList.add(name);
        const shadowDom = modalElmTemp.attachShadow({ mode: "open" });
        var style = document.createElement('style')
        style.innerHTML = css + sharedModalCss;
        shadowDom.appendChild(style);
        setModalElm(shadowDom);
        hostDoc.body?.append(modalElmTemp);

        return () => {
            shadowDom.innerHTML = "";
            modalElmTemp.remove()
        }
    }, []);

    return modalElm && ReactDOM.createPortal(
        children,
        modalElm
    );
}

const getHostDocument = () => window?.parent?.document ?? window.document;
