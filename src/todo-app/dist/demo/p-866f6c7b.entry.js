import{r as t,h as e,H as i,c as o}from"./p-53776a37.js";import{T as s,l as n}from"./p-547d8d03.js";const r=class{constructor(e){t(this,e),this.show=["header","list","footer"],this.todoService=new s,this.tasks=[],this.filters=[]}async getTodoService(){return this.todoService}componentDidLoad(){n((()=>this.todoService.tasks.toArray())).subscribe((t=>{this.tasks=t})),n((()=>this.todoService.filters.toArray())).subscribe((t=>{this.filters=t}))}render(){const t=this.filters.filter((({active:t})=>t)).map((({name:t})=>t)),o=this.tasks.filter((({completed:e,deleted:i})=>e&&t.includes("completed")||!i&&!e&&t.includes("pending")));return e(i,null,e("div",{class:"wrapper"},this.show.includes("header")&&e("todo-header",{onAddTask:({detail:t})=>this.todoService.addTask({title:t})}),this.show.includes("list")&&e("todo-list",{tasks:o,onCompleteTask:({detail:t})=>{this.todoService.completeTask(t.id,t.completed)},onDeleteTask:({detail:t})=>this.todoService.deleteTask(t),activefilters:t}),this.show.includes("footer")&&e("todo-footer",{onFilterToggle:({detail:t})=>this.todoService.changeFilter(t.name,t.active),onClear:()=>this.todoService.tasks.clear(),tasks:this.tasks,filters:this.filters})))}};r.style=":host{display:block}*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins', sans-serif}::selection{color:#ffff;background:rgb(142, 73, 232)}.wrapper{background:#fff;width:100%;padding:25px;}";const a=class{constructor(e){t(this,e),this.filterToggle=o(this,"filterToggle",7),this.clear=o(this,"clear",7)}render(){return e(i,null,e("ul",{class:"filters"},this.filters.map((({name:t,active:i,id:o})=>e("li",null,e("input",{key:o,type:"checkbox",onChange:({target:t})=>this.filterToggle.emit({name:o,active:t.checked}),checked:i}),e("span",null,t))))),e("div",{class:"footer"},e("span",null,"You have ",e("span",{class:"pendingTasks"},this.tasks.filter((({completed:t,deleted:e})=>!t&&!e)).length)," pending tasks"),e("button",{onClick:()=>this.clear.emit()},"Clear All")))}};a.style=":host{display:block}.footer button:hover{background:#721ce3}.wrapper .footer{width:100%;margin-top:20px;align-items:center;justify-content:space-between}.footer button{padding:6px 10px;border-radius:3px;border:none;outline:none;color:#fff;font-weight:400;font-size:16px;margin-left:5px;background:#8E49E8;cursor:pointer;user-select:none;opacity:0.6;transition:all 0.3s ease}.footer button.active{opacity:1;pointer-events:auto}ul.filters{display:flex;justify-content:space-evenly;list-style:none}";const l=class{constructor(e){t(this,e),this.addTask=o(this,"addTask",7),this.title=""}render(){return e("div",{class:"header-con"},e("header",null,"Todo App"),e("div",{class:"inputField"},e("input",{onInput:t=>this.title=t.target.value,type:"text",placeholder:"Add your new todo",value:this.title}),e("button",{onClick:()=>{this.addTask.emit(this.title),this.title=""}},"+")))}};l.style=":host{display:block}header{font-size:30px;font-weight:600}.inputField{margin:20px 0;width:100%;display:flex;height:45px}.inputField input{width:85%;height:100%;outline:none;border-radius:3px;border:1px solid #ccc;font-size:17px;padding-left:15px;transition:all 0.3s ease}.inputField input:focus{border-color:#8E49E8}.inputField button{width:50px;height:100%;border:none;color:#fff;margin-left:5px;font-size:21px;outline:none;background:#8E49E8;cursor:pointer;border-radius:3px;opacity:0.6;transition:all 0.3s ease}.inputField button.active{opacity:1;pointer-events:auto}.inputField button:hover,.footer button:hover{background:#721ce3}";const d=class{constructor(e){t(this,e),this.completeTask=o(this,"completeTask",7),this.deleteTask=o(this,"deleteTask",7)}render(){var t;return e("ul",{class:"todoList"},null===(t=this.tasks)||void 0===t?void 0:t.map((({title:t,deleted:i,completed:o,id:s})=>e("li",{key:s},e("div",{class:"task-con"},e("input",{type:"checkbox",onChange:({target:t})=>this.completeTask.emit({id:s,completed:null==t?void 0:t.checked}),checked:o}),e("span",null,t)),!i&&e("div",{onClick:()=>this.deleteTask.emit(s),class:"icon"},"Delete")))))}};d.style=":host{display:block}.todoList{max-height:250px;overflow-y:auto;padding:0}.task-con input{margin-right:0.5em}.todoList li{display:flex;justify-content:space-between;align-items:center;position:relative;list-style:none;height:45px;line-height:45px;margin-bottom:8px;background:#f2f2f2;border-radius:3px;padding:0 15px;cursor:default;overflow:hidden}.todoList li .icon{position:absolute;right:-65px;background:#e74c3c;text-align:center;color:#fff;border-radius:0 3px 3px 0;cursor:pointer;transition:all 0.2s ease;padding:0 0.5em}.todoList li:hover .icon{right:0px}";export{r as todo_app,a as todo_footer,l as todo_header,d as todo_list}