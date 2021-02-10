import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { AnyAction, Store, Reducer, Action } from "redux";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { injectAsyncReducer, removeReducer } from "./dynamicLoadReducers";

export const StateManagmentIframe = ({ type }: { type: string }) => {
    const [payload, setPayload] = useState<Object>({});
    const [title, setTitle] = useState<string>('');
    const result = useSelector((state: any) => state[type]);
    const actionRef = useRef<() => Action<any>>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!type) return;
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
        import(`./reducers/${type}`).then(({ actionCreator }) => {
            actionRef.current = actionCreator;
        })
    }, [type]);

    const addHandler = useCallback((ev) => {
        dispatch(actionRef.current?.());
    }, []);


    return (
        <>
            <h3>{title}</h3>
            <div className="field">
                <button onClick={addHandler}>Add {type}</button>
            </div>
            <div className="result">{JSON.stringify(result)}</div>
        </>
    )
}


export const StateManagementIframeWrapper = () => {
    const [store, setStore] = useState<Store<any>>();
    const [iframeType, setIframeType] = useState<string>("");

    const ProxyHandler: ProxyHandler<object> = {
        get: (target: any, prop: string, reciver: any) => {
            if (typeof target[prop] === "function") {
                return new Proxy((target[prop] as Function), {
                    apply: (target: Function, thisArg: any, argArray?: any) => {
                        return target.call(store, ...argArray)
                    }
                })
            }
            return target[prop];
        }
    }

    useEffect(() => {
        if (!(window?.parent as any)?.Store || store) return;
        const s = (window as any).parent.Store;//new Proxy((window as any).parent.Store, ProxyHandler);
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setIframeType(title);
        title && import(`./reducers/${title}`).then((module: any) => {
            const reducer = module?.[title];
            console.log(reducer);
            injectAsyncReducer(s, title, reducer)
        })
        setStore(s);
    }, [(window?.parent as any)?.Store]);

    useEffect(() => () => {
        debugger;
        removeReducer(store, iframeType as string)
    }, [])

    return (
        <>
            <h2>test</h2>
            {store ? <Provider store={store}>
                <StateManagmentIframe type={iframeType} />
            </Provider> : null}
        </>)
}

