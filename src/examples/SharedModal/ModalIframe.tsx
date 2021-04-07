import React, { DialogHTMLAttributes, FC, useEffect, useRef, useState } from "react";
import { UILauncher } from "./UiLauncher";

export const ModalIframe = () => {
    const [counter, setCounter] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [parentModal, setParentModal] = useState<HTMLDivElement | null>();
    const modalContentRef = useRef<HTMLDivElement>(null);
    const increaseBtnRef = useRef<HTMLButtonElement>(null);
    const [uiToLaunch, setUiToLaunch] = useState<UILauncher>();

    useEffect(() => {
        import("./modalContentLitElement").then(console.log);
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
    }, []);

    useEffect(() => {
        if (!window?.parent?.window) return;
        setParentModal(window.parent.window.document.body.querySelector<HTMLDivElement>(".modals"));
    }, []);

    const showModal = () => {
        if (!parentModal || !modalContentRef.current) return;
        if(!uiToLaunch){
            const ui = new UILauncher(modalContentRef.current, parentModal);
            setUiToLaunch(ui);
        }

        uiToLaunch?.launch();
        // const parentElement = parentModal.parentElement;
        // const modalElm = document.createElement('div');
        // modalElm.innerText = "Some TEXT";
        // parentModal.innerHTML = '';
        // parentModal.appendChild(modalContentRef.current);
        // parentElement?.classList.add("opened");
        // parentElement.onclick = () => { parentElement.classList.remove("opened"); parentModal?.setAttribute("open", "false"); };
        // parentModal?.setAttribute("open", "true");
    }

    return (
        <>
            <h3>{title}</h3>
            <button onClick={showModal}>Show Modal</button>
            <div ref={modalContentRef} style={{ color: "red" }}>
                <hello-component />
            </div>
            <button onClick={()=>{(window.parent as any).Toaster.info("213123")}}> Show Toaster Message</button>
        </>
    )
}