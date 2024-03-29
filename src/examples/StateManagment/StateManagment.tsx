import React, { useEffect, useRef, useState } from "react";
import { Provider, useSelector } from 'react-redux';
import "./StateManagment.css";
import { configureStore } from "./dynamicLoadReducers";


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
            <h3>Redux</h3>
            <button onClick={()=>setShowPosts(!showPosts)}>Show Posts</button>
            <iframe title="one" height={"300px"} ref={oneRef} id="one" src="/state_managemnet_Iframe?title=users" />
            {showPosts && <iframe title="two" height={"300px"} ref={oneRef} id="two" src="/state_managemnet_Iframe?title=posts" />}
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
