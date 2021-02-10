import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SharedModal.css";

const SharedModal = () => {
    const [someValue, setSomeValue] = useState<string>('');
    const oneRef = useRef<HTMLIFrameElement>(null);
    const twoRef = useRef<HTMLIFrameElement>(null);

    return (
        <>
            <div className="con">
               <h2>Show Modal</h2>
                <iframe title="one" ref={oneRef} id="one" src="/modal_iframe?title=iframeChild1" />
                <iframe title="two" ref={twoRef} id="two" src="/modal_iframe?title=iframeChild2" />
            </div>
            <div className="modals">
                <dialog open={false} id="my-dialog">
                </dialog>
            </div>
        </>
    )
}

export default SharedModal;