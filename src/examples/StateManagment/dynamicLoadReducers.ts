// This part of code is copied from Dan Abramov answer - https://stackoverflow.com/a/33044701/2902013 

import { combineReducers, Reducer, Store } from 'redux';
import { createStore } from 'redux';
//couple of reducers available as part of inital config of app.
// import users from './reducers/users';
// import posts from './reducers/posts';



export function createReducer(asyncReducers?: { [key: string]: Reducer }) {
    return combineReducers({
        ...asyncReducers
    });
}

export function configureStore(initialState: any) {
    const store = createStore(createReducer(), initialState);
    (store as any).asyncReducers = {};
    return store;
}

export function injectAsyncReducer(store: any, name: string, asyncReducer: Reducer) {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
}

export function removeReducer(store: any, name: string) {
    delete store?.asyncReducers?.[name];
    store.replaceReducer(createReducer(store.asyncReducers));
}

// Assuming React Router here but the principle is the same
// regardless of the library: make sure store is available
// when you want to require.ensure() your reducer so you can call
// injectAsyncReducer(store, name, reducer).

// function createRoutes(store:Store) {
//     // ...

//     const CommentsRoute = {
//         // ...

//         getComponents(location, callback) {
//             require.ensure([
//                 './pages/Comments',
//                 './reducers/comments'
//             ], function (require) {
//                 const Comments = require('./pages/Comments').default;
//                 const commentsReducer = require('./reducers/comments').default;

//                 injectAsyncReducer(store, 'comments', commentsReducer);
//                 callback(null, Comments);
//             })
//         }
//     };

//     // ...
// }