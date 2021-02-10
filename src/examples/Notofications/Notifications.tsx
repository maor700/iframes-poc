import React, { useCallback, useEffect, useRef, useState } from "react";
import { isString } from "util";

const Notifications = () => {
    const oneRef = useRef(null);
    return (
        <div className="con">
            <h2>Notifications</h2>
            <iframe title="one" ref={oneRef} id="one" src="/notification_iframe?title=iframe" />
        </div>
    )
}

export default Notifications;