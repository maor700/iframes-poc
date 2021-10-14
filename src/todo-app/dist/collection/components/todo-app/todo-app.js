import { Component, Host, h, State, Prop, Method } from '@stencil/core';
import { liveQuery } from 'dexie';
import { TodoAppData } from "../../services/todoDbService";
export class TodoApp {
  constructor() {
    this.show = ["header", "list", "footer"];
    this.todoService = new TodoAppData();
    this.tasks = [];
    this.filters = [];
  }
  async getTodoService() {
    return this.todoService;
  }
  componentDidLoad() {
    liveQuery(() => {
      return this.todoService.tasks.toArray();
    }).subscribe(tasks => {
      this.tasks = tasks;
    });
    liveQuery(() => this.todoService.filters.toArray()).subscribe(filters => {
      this.filters = filters;
    });
  }
  render() {
    const activeFilters = this.filters.filter(({ active }) => active).map(({ name }) => name);
    const TasksToRender = this.tasks.filter(({ completed, deleted }) => {
      return (completed && activeFilters.includes("completed"))
        ||
          (!deleted && !completed && activeFilters.includes("pending"));
    });
    return (h(Host, null,
      h("div", { class: "wrapper" },
        this.show.includes("header") && h("todo-header", { onAddTask: ({ detail }) => this.todoService.addTask({ title: detail }) }),
        this.show.includes("list") && h("todo-list", { tasks: TasksToRender, onCompleteTask: ({ detail }) => { this.todoService.completeTask(detail.id, detail.completed); }, onDeleteTask: ({ detail: id }) => this.todoService.deleteTask(id), activefilters: activeFilters }),
        this.show.includes("footer") && h("todo-footer", { onFilterToggle: ({ detail }) => this.todoService.changeFilter(detail.name, detail.active), onClear: () => this.todoService.tasks.clear(), tasks: this.tasks, filters: this.filters }))));
  }
  static get is() { return "todo-app"; }
  static get originalStyleUrls() { return {
    "$": ["todo-app.css"]
  }; }
  static get styleUrls() { return {
    "$": ["todo-app.css"]
  }; }
  static get properties() { return {
    "show": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(\"header\" | \"list\" | \"footer\")[]",
        "resolved": "(\"header\" | \"list\" | \"footer\")[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[\"header\", \"list\", \"footer\"]"
    }
  }; }
  static get states() { return {
    "todoService": {},
    "tasks": {},
    "filters": {}
  }; }
  static get methods() { return {
    "getTodoService": {
      "complexType": {
        "signature": "() => Promise<TodoAppData>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "TodoAppData": {
            "location": "import",
            "path": "../../services/todoDbService"
          }
        },
        "return": "Promise<TodoAppData>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
