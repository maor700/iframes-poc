import Dexie from "dexie";

export class TodoAppData extends Dexie {
    tasks: Dexie.Table<ITask, number>;
    filters: Dexie.Table<IFilter, string>;

    constructor() {
        super("TodoAppData");
        this.version(1).stores({
            tasks: '++id, title, completed, deleted',
            filters: 'id, name, active',
        });

        this.tasks = this.table("tasks");

        this.filters = this.table("filters");

        this.filters.put({ name: "completed", active: false, id: "completed" });
        this.filters.put({ name: "pending", active: true, id: "pending" });
    }

    addTask = async (task: ITask) => {
        return this.tasks.add(task);
    }

    deleteTask = async (id: number) => {
        return this.tasks.delete(id);
    }

    completeTask = async (id: number, status: boolean) => {
        await this.tasks.update(id, { completed: status });
    }

    changeFilter = async (filter: string, status: boolean) => {
        return this.filters.update(filter, { active: status });
    }
}

export interface ITask {
    id?: number;
    title: string;
    completed?: boolean;
    deleted?: boolean
}
export interface IFilter {
    id?: string;
    name: string;
    active: boolean;
}