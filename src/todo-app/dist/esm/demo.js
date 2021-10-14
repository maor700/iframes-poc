import { p as promiseResolve, b as bootstrapLazy } from './index-95c95fc1.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["todo-app_4",[[0,"todo-app",{"show":[16],"todoService":[32],"tasks":[32],"filters":[32],"getTodoService":[64]}],[1,"todo-footer",{"activefilters":[16],"filters":[16],"tasks":[16]}],[1,"todo-header",{"title":[32]}],[1,"todo-list",{"activefilters":[16],"tasks":[16]}]]]], options);
});
