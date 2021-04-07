import React, { useEffect } from 'react';
import { IframeOne } from "./examples/TwoWayMessage/IframeOne";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { ExamplesMenu } from './examples/ExamplesMenu';
import { AsyncIframe } from './examples/AsyncMessage/AsyncIframe';
import SharedModel from './examples/SharedModel/SharedModel';
import { SharedModelIfarme } from './examples/SharedModel/SharedModelIfarme';
import { NotificationIframe } from './examples/Notofications/IframeNotifications';
import { ModalIframe } from './examples/SharedModal/ModalIframe';
import {StateManagementIframeWrapper} from './examples/StateManagment/StateManagmentIframe';
import UiThings from './examples/UiThings.tsx/UiThings';
import { UiThingsIframe } from './examples/UiThings.tsx/UiThingsIframe';
import { PWACacheIframe } from './examples/PWACache/PWACacheIframe';
import { StateManagmentDexieIframe } from './examples/StateManagment/StateManagmentDexieIframe';
import {defineCustomElements} from "todo-app/dist/loader";
import {TodoAppData} from "./examples/StateManagment/todoDbService"

defineCustomElements();

export const db = new TodoAppData();
console.log(db);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/menu">
            <ExamplesMenu />
          </Route>
          <Route path="/iframe1">
            <IframeOne />
          </Route>
          <Route path="/asyncIframe">
            <AsyncIframe />
          </Route>
          <Route path="/shared_model">
            <SharedModelIfarme />
          </Route>
          <Route path="/modal_iframe">
            <ModalIframe />
          </Route>
          <Route path="/notification_iframe">
            <NotificationIframe />
          </Route>
          <Route path="/state_managemnet_Iframe">
            <StateManagementIframeWrapper />
          </Route>
          <Route path="/state_managemnet_dexie_Iframe">
            <StateManagmentDexieIframe />
          </Route>
          <Route path="/ui_things_iframe">
            <UiThingsIframe/>
          </Route>
          <Route path="/PWA_Cache_iframe">
            <PWACacheIframe/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
