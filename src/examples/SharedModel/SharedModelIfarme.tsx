import React, { FC, useCallback, useEffect, useState } from "react";
export const SharedModelIfarme = () => {
    const [argA, setArgA] = useState<number>(0);
    const [argB, setArgB] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [result, setResult] = useState<number>(0);
    const [lastResult, setLastResult] = useState<number>(0);
    const [calcService, setCalcService] = useState<any>(null);

    useEffect(() => {
        const title = new URL(window.location.href)?.searchParams.get("title");
        title && setTitle(title);
    }, []);

    const ProxyHandler: ProxyHandler<object> = {
        get: (target: any, prop: string, reciver: any) => {
            if (typeof target[prop] === "function") {
                return new Proxy((target[prop] as Function), {
                    apply: (target: Function, thisArg: any, argArray?: any) => {
                        return target.call(calcService, ...argArray)
                    }
                })
            }
            return target[prop];
        }
    }

    useEffect(() => {
        if (!window?.parent || calcService) return;
        const calc = new Proxy((window as any).parent.CalcProvider, ProxyHandler);
        setCalcService(calc);
    }, []);

    useEffect(() => {
        if (!calcService) return;
        const result = calcService.Add(argA, argB);
        setResult(result);
    }, [argA, argB, calcService]);

    const getLastResult = useCallback(() => {
        setLastResult(calcService?.lastResult)
    }, [result]);


    return (
        <>
            <h3>{title}</h3>
            <div className="field">
                <input type="number" value={argA} onChange={({ target }) => setArgA(Number.parseInt(target.value))} />
                <input type="number" value={argB} onChange={({ target }) => setArgB(Number.parseInt(target.value))} />
            </div>
            <div className="result">{result}</div>
            <button onClick={getLastResult}>Get Last Value</button>
            <div className="result">{lastResult}</div>
            <button onClick={() => { calcService.lastResult++ }}>Increase lastResult value</button>
        </>
    )
}
