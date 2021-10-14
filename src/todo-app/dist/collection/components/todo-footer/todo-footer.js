import { Component, Host, h, Prop, Event } from '@stencil/core';
export class TodoFooter {
  render() {
    return (h(Host, null,
      h("ul", { class: "filters" }, this.filters.map(({ name, active, id }) => (h("li", null,
        h("input", { key: id, type: "checkbox", onChange: ({ target }) => this.filterToggle.emit({ name: id, active: target.checked }), checked: active }),
        h("span", null, name))))),
      h("div", { class: "footer" },
        h("span", null,
          "You have ",
          h("span", { class: "pendingTasks" }, this.tasks.filter(({ completed, deleted }) => !completed && !deleted).length),
          " pending tasks"),
        h("button", { onClick: () => this.clear.emit() }, "Clear All"))));
  }
  static get is() { return "todo-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["todo-footer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["todo-footer.css"]
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
    "filters": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IFilter[]",
        "resolved": "IFilter[]",
        "references": {
          "IFilter": {
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
      "method": "filterToggle",
      "name": "filterToggle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "IFilter",
        "resolved": "IFilter",
        "references": {
          "IFilter": {
            "location": "import",
            "path": "../../services/todoDbService"
          }
        }
      }
    }, {
      "method": "clear",
      "name": "clear",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
