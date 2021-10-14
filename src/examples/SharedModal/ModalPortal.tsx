import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useCssAsStringLoader } from "./useCssAsStringLoader";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import sharedModalCss from "!!url-loader!./SharedModal.css";

export const ModalPortal: FC<{ css: string, name: string, isOpen?: boolean, position?: { x: number, y: number } }> = ({ name, css, children }) => {
    const [modalElm, setModalElm] = useState<any>(null);
    const modalCss = useCssAsStringLoader([sharedModalCss]);
    
    useEffect(() => {
        console.log(modalCss, "modalCss");
        
        const hostDoc = getHostDocument();
        const modalElmTemp = document.createElement("div");
        modalElmTemp.id = name;
        modalElmTemp.classList.add(name);
        const shadowDom = modalElmTemp.attachShadow({ mode: "open" });
        var style = document.createElement('style')
        style.innerHTML = css + modalCss;
        shadowDom.appendChild(style);
        setModalElm(shadowDom);
        hostDoc.body?.append(modalElmTemp);

        return () => {
            modalElmTemp.remove()
        }
    }, [modalCss]);

    return modalElm && ReactDOM.createPortal(
        children,
        modalElm
    );
}

const getHostDocument = () => window?.parent?.document ?? window.document;
