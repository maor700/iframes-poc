'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c4c70818.js');
const todoDbService = require('./todoDbService-9febeca8.js');

const todoAppCss = ":host{display:block}*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins', sans-serif}::selection{color:#ffff;background:rgb(142, 73, 232)}.wrapper{background:#fff;width:100%;padding:25px;}";

const TodoApp = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.show = ["header", "list", "footer"];
    this.todoService = new todoDbService.TodoAppData();
    this.tasks = [];
    this.filters = [];
  }
  async getTodoService() {
    return this.todoService;
  }
  componentDidLoad() {
    todoDbService.liveQuery(() => {
      return this.todoService.tasks.toArray();
    }).subscribe(tasks => {
      this.tasks = tasks;
    });
    todoDbService.liveQuery(() => this.todoService.filters.toArray()).subscribe(filters => {
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
    return (index.h(index.Host, null, index.h("div", { class: "wrapper" }, this.show.includes("header") && index.h("todo-header", { onAddTask: ({ detail }) => this.todoService.addTask({ title: detail }) }), this.show.includes("list") && index.h("todo-list", { tasks: TasksToRender, onCompleteTask: ({ detail }) => { this.todoService.completeTask(detail.id, detail.completed); }, onDeleteTask: ({ detail: id }) => this.todoService.deleteTask(id), activefilters: activeFilters }), this.show.includes("footer") && index.h("todo-footer", { onFilterToggle: ({ detail }) => this.todoService.changeFilter(detail.name, detail.active), onClear: () => this.todoService.tasks.clear(), tasks: this.tasks, filters: this.filters }))));
  }
};
TodoApp.style = todoAppCss;

const todoFooterCss = ":host{display:block}.footer button:hover{background:#721ce3}.wrapper .footer{width:100%;margin-top:20px;align-items:center;justify-content:space-between}.footer button{padding:6px 10px;border-radius:3px;border:none;outline:none;color:#fff;font-weight:400;font-size:16px;margin-left:5px;background:#8E49E8;cursor:pointer;user-select:none;opacity:0.6;transition:all 0.3s ease}.footer button.active{opacity:1;pointer-events:auto}ul.filters{display:flex;justify-content:space-evenly;list-style:none}";

const TodoFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.filterToggle = index.createEvent(this, "filterToggle", 7);
    this.clear = index.createEvent(this, "clear", 7);
  }
  render() {
    return (index.h(index.Host, null, index.h("ul", { class: "filters" }, this.filters.map(({ name, active, id }) => (index.h("li", null, index.h("input", { key: id, type: "checkbox", onChange: ({ target }) => this.filterToggle.emit({ name: id, active: target.checked }), checked: active }), index.h("span", null, name))))), index.h("div", { class: "footer" }, index.h("span", null, "You have ", index.h("span", { class: "pendingTasks" }, this.tasks.filter(({ completed, deleted }) => !completed && !deleted).length), " pending tasks"), index.h("button", { onClick: () => this.clear.emit() }, "Clear All"))));
  }
};
TodoFooter.style = todoFooterCss;

const todoHeaderCss = ":host{display:block}header{font-size:30px;font-weight:600}.inputField{margin:20px 0;width:100%;display:flex;height:45px}.inputField input{width:85%;height:100%;outline:none;border-radius:3px;border:1px solid #ccc;font-size:17px;padding-left:15px;transition:all 0.3s ease}.inputField input:focus{border-color:#8E49E8}.inputField button{width:50px;height:100%;border:none;color:#fff;margin-left:5px;font-size:21px;outline:none;background:#8E49E8;cursor:pointer;border-radius:3px;opacity:0.6;transition:all 0.3s ease}.inputField button.active{opacity:1;pointer-events:auto}.inputField button:hover,.footer button:hover{background:#721ce3}";

const TodoHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.addTask = index.createEvent(this, "addTask", 7);
    this.title = "";
  }
  render() {
    return (index.h("div", { class: "header-con" }, index.h("header", null, "Todo App"), index.h("div", { class: "inputField" }, index.h("input", { onInput: (ev) => this.title = ev.target.value, type: "text", placeholder: "Add your new todo", value: this.title }), index.h("button", { onClick: () => {
        this.addTask.emit(this.title);
        this.title = "";
      } }, "+"))));
  }
};
TodoHeader.style = todoHeaderCss;

const todoListCss = ":host{display:block}.todoList{max-height:250px;overflow-y:auto;padding:0}.task-con input{margin-right:0.5em}.todoList li{display:flex;justify-content:space-between;align-items:center;position:relative;list-style:none;height:45px;line-height:45px;margin-bottom:8px;background:#f2f2f2;border-radius:3px;padding:0 15px;cursor:default;overflow:hidden}.todoList li .icon{position:absolute;right:-65px;background:#e74c3c;text-align:center;color:#fff;border-radius:0 3px 3px 0;cursor:pointer;transition:all 0.2s ease;padding:0 0.5em}.todoList li:hover .icon{right:0px}";

const TodoList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.completeTask = index.createEvent(this, "completeTask", 7);
    this.deleteTask = index.createEvent(this, "deleteTask", 7);
  }
  render() {
    var _a;
    return (index.h("ul", { class: "todoList" }, (_a = this.tasks) === null || _a === void 0 ? void 0 : _a.map(({ title, deleted, completed, id }) => (index.h("li", { key: id }, index.h("div", { class: "task-con" }, index.h("input", { type: "checkbox", onChange: ({ target }) => this.completeTask.emit({ id, completed: target === null || target === void 0 ? void 0 : target.checked }), checked: completed }), index.h("span", null, title)), !deleted && index.h("div", { onClick: () => this.deleteTask.emit(id), class: "icon" }, "Delete"))))));
  }
};
TodoList.style = todoListCss;

exports.todo_app = TodoApp;
exports.todo_footer = TodoFooter;
exports.todo_header = TodoHeader;
exports.todo_list = TodoList;
