import { Component, h, State, Event } from '@stencil/core';
export class TodoHeader {
  constructor() {
    this.title = "";
  }
  render() {
    return (h("div", { class: "header-con" },
      h("header", null, "Todo App"),
      h("div", { class: "inputField" },
        h("input", { onInput: (ev) => this.title = ev.target.value, type: "text", placeholder: "Add your new todo", value: this.title }),
        h("button", { onClick: () => {
            this.addTask.emit(this.title);
            ;
            this.title = "";
          } }, "+"))));
  }
  static get is() { return "todo-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["todo-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["todo-header.css"]
  }; }
  static get states() { return {
    "title": {}
  }; }
  static get events() { return [{
      "method": "addTask",
      "name": "addTask",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
