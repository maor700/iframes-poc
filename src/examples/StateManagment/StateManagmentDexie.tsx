import React, { useEffect, useRef, useState } from "react";
import "./StateManagment.css";
import { db } from "../../App";
import { useLiveQuery } from "dexie-react-hooks";

export const StateManagmentDexie = () => {
  const listElmRef = useRef<HTMLIFrameElement>(null);
  const count = useLiveQuery(() => db.tasks?.count());
  const [listHeight, setListHeight] = useState(200);
  useEffect(() => {
    if (!listElmRef.current) return;
    const {clientHeight, scrollHeight, sty} = listElmRef.current.contentWindow?.document?.body as any || {};
    const h = Math.min(clientHeight, scrollHeight);
    h && setListHeight(h);
  }, [count]);

  return (
    <div className="con">
      <h2>State Management</h2>
      <h3>Indexeddb with dexie.js</h3>
      <iframe className="todo" title="three" height={"125px"} width={"100%"} id="three" src="/state_managemnet_dexie_Iframe?title=header" />
      <iframe ref={listElmRef} className="todo" title="three" height={`${listHeight+40}px`} width={"100%"} id="three" src="/state_managemnet_dexie_Iframe?title=list" />
      <iframe className="todo" title="three" height={"90px"} width={"100%"} id="three" src="/state_managemnet_dexie_Iframe?title=footer" />
    </div>
  )
}