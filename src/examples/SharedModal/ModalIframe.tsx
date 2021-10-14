import React, { DialogHTMLAttributes, FC, useEffect, useRef, useState } from "react";
import { ModalPortal } from "./ModalPortal";
import { UILauncher } from "./UiLauncher";
// import "./ModalIframe.css"
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import css from "!!raw-loader!./ModalIframe.css";

export const ModalIframe = () => {
    const [counter, setCounter] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [parentModal, setParentModal] = useState<HTMLDivElement | null>();
    const modalContentRef = useRef<HTMLDivElement>(null);
    const increaseBtnRef = useRef<HTMLButtonElement>(null);
    const [uiToLaunch, setUiToLaunch] = useState<UILauncher>();
    const [showReactModal, setShowReactModal] = useState<boolean>(false);

    useEffect(() => {
        import("./modalContentLitElement").then(console.log);
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
    }, []);

    useEffect(() => {
        if (!window?.parent?.window) return;
        const modalElm = window.parent.window.document.body.querySelector<HTMLDivElement>(".modals");

        console.log(modalElm, "modal iframe");

        setParentModal(modalElm);
    }, []);

    const showModal = () => {
        if (!parentModal || !modalContentRef.current) return;
        if (!uiToLaunch) {
            const ui = new UILauncher(modalContentRef.current, parentModal);
            setUiToLaunch(ui);
        }

        uiToLaunch?.launch();
    }

    return (
        <>
            <button onClick={() => { setShowReactModal(true) }}>Show Modal</button>
            {showReactModal && <ModalPortal css={css} name="my-modal">
                <div className="modal-wrapper">

                    <dialog id="my-dialog" open={showReactModal}>
                        <div className="close" onClick={() => { setShowReactModal(false) }}>X</div>
                        <div className="dialog-content">
                            <h3>{title}</h3>
                            <button onClick={() => { setCounter(counter + 1) }}>increce</button>
                            <div className="counter">{counter}</div>
                            <button onClick={() => { (window.parent as any).Toaster.info("213123") }}> Show Toaster Message</button>
                        </div>
                    </dialog>
                </div>
            </ModalPortal>}
        </>
    )
}