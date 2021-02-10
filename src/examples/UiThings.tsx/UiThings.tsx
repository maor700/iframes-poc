import React, { useCallback, useEffect, useRef, useState } from "react";
import { Resizable, ResizableBox } from 'react-resizable';
import './handlerStyle.css';

const UiThings = () => {
    const oneRef = useRef(null);
    const [wh, setWh] = useState<number[]>([200, 200]);
    return (

        <div className="con">
            <h2>UI Things</h2>
            <ResizableBox onResize={(ev, { size }) => setWh([size.width - 35, size.height - 35])} width={350} height={200} draggableOpts={{}} minConstraints={[100, 100]} maxConstraints={[700, 700]}>
                <iframe style={{ border: "1px solid red", width: wh[0], height: wh[1] }} title="one" ref={oneRef} id="one" src="/ui_things_iframe?title=iframe" />
                <span>Contents</span>
            </ResizableBox>
        </div>
    )
}

export default UiThings;