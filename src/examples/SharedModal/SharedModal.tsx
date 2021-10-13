import React, { useEffect, useRef, useState } from "react";
import Toaster from "toastr";
import "toastr/build/toastr.min.css";
import "./ModalIframe";
import "./SharedModal.css";
const SharedModal = () => {
    const toasterCon = useRef<any>();
    useEffect(() => {
        Toaster.options.target = toasterCon?.current;
        (window as any).Toaster = Toaster;
    }, [])
    const [someValue, setSomeValue] = useState<string>('');
    const oneRef = useRef<HTMLIFrameElement>(null);
    const twoRef = useRef<HTMLIFrameElement>(null);

    return (
        <>
            <div className="con">
                <h2>Show Modal</h2>
                <button onClick={() => { Toaster.info("hi") }}>toast</button>
                <iframe title="one" ref={oneRef} id="one" src="/modal_iframe?title=iframeChild1" />
                <iframe title="two" ref={twoRef} id="two" src="/modal_iframe?title=iframeChild2" />
            </div>
            <div className={`modals`}></div>
            <div ref={toasterCon} className="toaster">
            </div>
        </>
    )
}

export default SharedModal;
class ModalService {
    rootElm: HTMLElement;
    constructor(rootElm: HTMLElement) {
        this.rootElm = rootElm;
    }
    showModal = (content: HTMLElement) => {
        this.rootElm.append(content);
    }
}

setTimeout(() => {
    const modalsCon = document.getElementById("modals-con");
    (window as any).modalService = modalsCon ? new ModalService(modalsCon) : null;
}, 3000);