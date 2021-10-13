import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";


export const ModalPortal: FC<{ name: string, isOpen?: boolean, position?: { x: number, y: number } }> = ({ name, children }) => {
    const [modalElm, setModalElm] = useState<any>(null);
    
    useEffect(() => {
        const modalElm = document.createElement("div");
        modalElm.id = name;
        modalElm.classList.add(name);
        setModalElm(modalElm);
        const hostDoc = getHostDocument();
        const modalsConElm = hostDoc.querySelector(".modals");
        modalsConElm?.append(modalElm);
    }, [])

    return modalElm && ReactDOM.createPortal(
        children,
        modalElm
    );
}

const getHostDocument = () => window?.parent?.document ?? window.document;
