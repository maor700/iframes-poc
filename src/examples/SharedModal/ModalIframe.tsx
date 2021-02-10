import React, { DialogHTMLAttributes, FC, useEffect, useRef, useState } from "react";
export const ModalIframe = () => {
    const [counter, setCounter] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [parentModal, setParentModal] = useState<HTMLDialogElement | null>();
    const modalContentRef = useRef<HTMLDivElement>(null);
    const increaseBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
    }, []);

    useEffect(() => {
        if (!window?.parent?.window) return;
        setParentModal(window.parent.window.document.body.querySelector<HTMLDialogElement>("#my-dialog"));
    }, []);

    const showModal = () => {
        if (!parentModal || !modalContentRef.current || !parentModal.parentElement || !increaseBtnRef.current) return;
        const parentElement = parentModal.parentElement;
        const modalElm = document.createElement('div');
        modalElm.innerText = "Some TEXT";
        parentModal.innerHTML = '';
        parentModal.appendChild(modalContentRef.current);
        parentElement?.classList.add("opened");
        increaseBtnRef.current.onclick = (ev)=>increase.call(this, ev);
        parentElement.onclick = () => { parentElement.classList.remove("opened"); parentModal?.setAttribute("open", "false"); };
        parentModal?.setAttribute("open", "true");
    }
    const increase = (ev:MouseEvent) => {
        ev.stopPropagation();
        setCounter.call(this,counter + 1)
    };

    return (
        <>
            <h3>{title}</h3>
            <button onClick={showModal}>Show Modal</button>
            <div ref={modalContentRef} style={{ color: "red" }}>
                <div className="">
                    counter:{counter}
                </div>
                <button ref={increaseBtnRef}>increase</button>
            </div>
        </>
    )
}