'use strict';

const index = require('./index-c4c70818.js');

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('demo.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["todo-app_4.cjs",[[0,"todo-app",{"show":[16],"todoService":[32],"tasks":[32],"filters":[32],"getTodoService":[64]}],[1,"todo-footer",{"activefilters":[16],"filters":[16],"tasks":[16]}],[1,"todo-header",{"title":[32]}],[1,"todo-list",{"activefilters":[16],"tasks":[16]}]]]], options);
});
