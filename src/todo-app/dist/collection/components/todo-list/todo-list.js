import { Component, h, Prop, Event } from '@stencil/core';
export class TodoList {
  render() {
    var _a;
    return (h("ul", { class: "todoList" }, (_a = this.tasks) === null || _a === void 0 ? void 0 : _a.map(({ title, deleted, completed, id }) => (h("li", { key: id },
      h("div", { class: "task-con" },
        h("input", { type: "checkbox", onChange: ({ target }) => this.completeTask.emit({ id, completed: target === null || target === void 0 ? void 0 : target.checked }), checked: completed }),
        h("span", null, title)),
      !deleted && h("div", { onClick: () => this.deleteTask.emit(id), class: "icon" }, "Delete"))))));
  }
  static get is() { return "todo-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["todo-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["todo-list.css"]
  }; }
  static get properties() { return {
    "activefilters": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "tasks": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ITask[]",
        "resolved": "ITask[]",
        "references": {
          "ITask": {
            "location": "import",
            "path": "../../services/todoDbService"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get events() { return [{
      "method": "completeTask",
      "name": "completeTask",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "{ id: number, completed: boolean }",
        "resolved": "{ id: number; completed: boolean; }",
        "references": {}
      }
    }, {
      "method": "deleteTask",
      "name": "deleteTask",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
}
