import React, { useEffect, useRef, useState } from "react";
import { createStore, AnyAction } from 'redux';
import { Provider, useSelector } from 'react-redux';
import "./StateManagment.css";
import { StateManagementIframeWrapper } from "./StateManagmentIframe";
import { configureStore, createReducer } from "./dynamicLoadReducers";


const StateManagment = () => {
    const [someValue, setSomeValue] = useState<string>('');
    const val = useSelector(state => JSON.stringify(state));
    const oneRef = useRef<HTMLIFrameElement>(null);
    const twoRef = useRef<HTMLIFrameElement>(null);
    const [showPosts, setShowPosts] = useState<boolean>(false);


    return (

        <div className="con">
            <h2>State Management</h2>
            <div className="">{val}</div>
            <button onClick={()=>setShowPosts(!showPosts)}>Show Posts</button>
            <iframe title="one" height={"300px"} ref={oneRef} id="one" src="/state_managemnet_Iframe?title=users" />
            {showPosts && <iframe title="two" height={"300px"} ref={twoRef} id="two" src="/state_managemnet_Iframe?title=posts" />}
        </div>
    )
}


const store = configureStore({});

const StateManagmentWrapper = () => {

    useEffect(() => {
        (window as any).Store = store;
    }, []);

    return (
        < Provider store={store} >
            <StateManagment />
        </Provider >)

}

export default StateManagmentWrapper;
