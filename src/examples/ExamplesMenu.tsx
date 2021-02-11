import React, { Suspense } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AsyncMessage from "./AsyncMessage/AsyncMessage";
import "./Examples.css";
import Notifications from "./Notofications/Notifications";
import PWACache from "./PWACache/PWACache";
import SharedModal from "./SharedModal/SharedModal";
import SharedModel from "./SharedModel/SharedModel";
import StateManagment from "./StateManagment/StateManagment";
import UiThings from "./UiThings.tsx/UiThings";
const TwoWayMessage = React.lazy(() => import("./TwoWayMessage/TwoWayMessage"));

export const ExamplesMenu = () => {
    return (
        <Router>
            <div className="layout">
                <div className="links-con">
                    <Link to={"/two_way_message"}>
                        <div className="links">
                            <span>Two Way Message</span>
                        </div>
                    </Link>
                    <Link to={"/async_message"}>
                        <div className="links">
                            Async Massage
                        </div>
                    </Link>
                    <Link to={"/shared_model"}>
                        <div className="links">
                            Shared Model
                        </div>
                    </Link>
                    <Link to={"/shared_modal"}>
                        <div className="links">
                            Shared Modal
                        </div>
                    </Link>
                    <Link to={"/state_management"}>
                        <div className="links">
                            State Management
                        </div>
                    </Link>
                    <Link to={"/notifications"}>
                        <div className="links">
                            Notifications
                        </div>
                    </Link>
                    <Link to={"/ui_things"}>
                        <div className="links">
                           UI things
                        </div>
                    </Link>
                    <Link to={"/pwa_cache"}>
                        <div className="links">
                            PWA Cache
                        </div>
                    </Link>
                    <Link to={"/local_storage_cookie"}>
                        <div className="links">
                            Local Storage
                        </div>
                    </Link>
                    <Link to={"/web_component_wrapper"}>
                        <div className="links">
                            Web Component Wrapper
                        </div>
                    </Link>
                </div>
                <div className="view">
                    <Link to="/menu">Back</Link>
                    <Switch>
                        <Route path="/two_way_message">
                            <h2>Two Way Message</h2>
                            <Suspense fallback={<div>Loading...</div>}>
                                <TwoWayMessage />
                            </Suspense>
                        </Route>
                        <Route path="/async_message">
                            <AsyncMessage />
                        </Route>
                        <Route path="/shared_model">
                            <SharedModel />
                        </Route>
                        <Route path="/notifications">
                            <Notifications/>
                        </Route>
                        <Route path="/state_management">
                            <StateManagment/>
                        </Route>
                        <Route path="/shared_modal">
                            <SharedModal/>
                        </Route>
                        <Route path="/ui_things">
                            <UiThings/>
                        </Route>
                        <Route path="/pwa_cache">
                            <PWACache/>
                        </Route>
                        <Route path="/local_storage_cookie">
                            <h2>Local Storage</h2>
                        </Route>
                        <Route path="/state_management">
                            <h2>State Management</h2>
                        </Route>
                        <Route path="/web_component_wrapper">
                            <h2>Web Component Wrapper</h2>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}