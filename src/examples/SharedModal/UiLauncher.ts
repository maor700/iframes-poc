import { threadId } from "worker_threads";

export class UILauncher {
    launchAddress: HTMLElement;
    contentElement: HTMLElement;
    dialogElement: HTMLDialogElement = document.createElement("dialog");
    closeBtn: HTMLDivElement = document.createElement("div");
    baseOrigin: HTMLElement
    constructor(contentElement: HTMLElement, addresContainer: HTMLElement) {
        this.contentElement = contentElement;
        this.baseOrigin = this.contentElement.parentElement ? this.contentElement.parentElement : document.body;
        this.launchAddress = addresContainer;
        this.closeBtn.innerHTML = "<h2>X</h2>";
        this.closeBtn.onclick = ()=>this.land();
        this.dialogElement.append(this.closeBtn);
    }
    launch() {
        // append to the parent element;
        this.dialogElement.open = false;
        this.dialogElement.append(this.contentElement);
        this.launchAddress.append(this.dialogElement);
        this.open();
    }
    land() {
        // return to the native place
        this.close();
        this.baseOrigin.append(this.contentElement);
        this.dialogElement.remove();
    }
    destroy() {
        // delete the element
        this.contentElement.remove();
        this.dialogElement.remove();
    }
    open() {
        //show
        this.dialogElement.open = true;
        this.launchAddress.classList.add("opened");
    }
    close() {
        //hide
        this.dialogElement.open = false;
        this.launchAddress.classList.remove("opened");
    }
}