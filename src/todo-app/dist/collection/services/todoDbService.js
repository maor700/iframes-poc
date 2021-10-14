import Dexie from "dexie";
export class TodoAppData extends Dexie {
  constructor() {
    super("TodoAppData");
    this.addTask = async (task) => {
      return this.tasks.add(task);
    };
    this.deleteTask = async (id) => {
      return this.tasks.delete(id);
    };
    this.completeTask = async (id, status) => {
      await this.tasks.update(id, { completed: status });
    };
    this.changeFilter = async (filter, status) => {
      return this.filters.update(filter, { active: status });
    };
    this.version(1).stores({
      tasks: '++id, title, completed, deleted',
      filters: 'id, name, active',
    });
    this.tasks = this.table("tasks");
    this.filters = this.table("filters");
    this.filters.put({ name: "completed", active: false, id: "completed" });
    this.filters.put({ name: "pending", active: true, id: "pending" });
  }
}
