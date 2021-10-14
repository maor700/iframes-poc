import { r as registerInstance, h, H as Host, c as createEvent } from './index-95c95fc1.js';
import { T as TodoAppData, l as liveQuery } from './todoDbService-c68d5838.js';

const todoAppCss = ":host{display:block}*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins', sans-serif}::selection{color:#ffff;background:rgb(142, 73, 232)}.wrapper{background:#fff;width:100%;padding:25px;}";

const TodoApp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { class: "wrapper" }, this.show.includes("header") && h("todo-header", { onAddTask: ({ detail }) => this.todoService.addTask({ title: detail }) }), this.show.includes("list") && h("todo-list", { tasks: TasksToRender, onCompleteTask: ({ detail }) => { this.todoService.completeTask(detail.id, detail.completed); }, onDeleteTask: ({ detail: id }) => this.todoService.deleteTask(id), activefilters: activeFilters }), this.show.includes("footer") && h("todo-footer", { onFilterToggle: ({ detail }) => this.todoService.changeFilter(detail.name, detail.active), onClear: () => this.todoService.tasks.clear(), tasks: this.tasks, filters: this.filters }))));
  }
};
TodoApp.style = todoAppCss;

const todoFooterCss = ":host{display:block}.footer button:hover{background:#721ce3}.wrapper .footer{width:100%;margin-top:20px;align-items:center;justify-content:space-between}.footer button{padding:6px 10px;border-radius:3px;border:none;outline:none;color:#fff;font-weight:400;font-size:16px;margin-left:5px;background:#8E49E8;cursor:pointer;user-select:none;opacity:0.6;transition:all 0.3s ease}.footer button.active{opacity:1;pointer-events:auto}ul.filters{display:flex;justify-content:space-evenly;list-style:none}";

const TodoFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.filterToggle = createEvent(this, "filterToggle", 7);
    this.clear = createEvent(this, "clear", 7);
  }
  render() {
    return (h(Host, null, h("ul", { class: "filters" }, this.filters.map(({ name, active, id }) => (h("li", null, h("input", { key: id, type: "checkbox", onChange: ({ target }) => this.filterToggle.emit({ name: id, active: target.checked }), checked: active }), h("span", null, name))))), h("div", { class: "footer" }, h("span", null, "You have ", h("span", { class: "pendingTasks" }, this.tasks.filter(({ completed, deleted }) => !completed && !deleted).length), " pending tasks"), h("button", { onClick: () => this.clear.emit() }, "Clear All"))));
  }
};
TodoFooter.style = todoFooterCss;

const todoHeaderCss = ":host{display:block}header{font-size:30px;font-weight:600}.inputField{margin:20px 0;width:100%;display:flex;height:45px}.inputField input{width:85%;height:100%;outline:none;border-radius:3px;border:1px solid #ccc;font-size:17px;padding-left:15px;transition:all 0.3s ease}.inputField input:focus{border-color:#8E49E8}.inputField button{width:50px;height:100%;border:none;color:#fff;margin-left:5px;font-size:21px;outline:none;background:#8E49E8;cursor:pointer;border-radius:3px;opacity:0.6;transition:all 0.3s ease}.inputField button.active{opacity:1;pointer-events:auto}.inputField button:hover,.footer button:hover{background:#721ce3}";

const TodoHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.addTask = createEvent(this, "addTask", 7);
    this.title = "";
  }
  render() {
    return (h("div", { class: "header-con" }, h("header", null, "Todo App"), h("div", { class: "inputField" }, h("input", { onInput: (ev) => this.title = ev.target.value, type: "text", placeholder: "Add your new todo", value: this.title }), h("button", { onClick: () => {
        this.addTask.emit(this.title);
        this.title = "";
      } }, "+"))));
  }
};
TodoHeader.style = todoHeaderCss;

const todoListCss = ":host{display:block}.todoList{max-height:250px;overflow-y:auto;padding:0}.task-con input{margin-right:0.5em}.todoList li{display:flex;justify-content:space-between;align-items:center;position:relative;list-style:none;height:45px;line-height:45px;margin-bottom:8px;background:#f2f2f2;border-radius:3px;padding:0 15px;cursor:default;overflow:hidden}.todoList li .icon{position:absolute;right:-65px;background:#e74c3c;text-align:center;color:#fff;border-radius:0 3px 3px 0;cursor:pointer;transition:all 0.2s ease;padding:0 0.5em}.todoList li:hover .icon{right:0px}";

const TodoList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.completeTask = createEvent(this, "completeTask", 7);
    this.deleteTask = createEvent(this, "deleteTask", 7);
  }
  render() {
    var _a;
    return (h("ul", { class: "todoList" }, (_a = this.tasks) === null || _a === void 0 ? void 0 : _a.map(({ title, deleted, completed, id }) => (h("li", { key: id }, h("div", { class: "task-con" }, h("input", { type: "checkbox", onChange: ({ target }) => this.completeTask.emit({ id, completed: target === null || target === void 0 ? void 0 : target.checked }), checked: completed }), h("span", null, title)), !deleted && h("div", { onClick: () => this.deleteTask.emit(id), class: "icon" }, "Delete"))))));
  }
};
TodoList.style = todoListCss;

export { TodoApp as todo_app, TodoFooter as todo_footer, TodoHeader as todo_header, TodoList as todo_list };
