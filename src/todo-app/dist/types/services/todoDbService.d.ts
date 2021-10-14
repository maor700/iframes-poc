import Dexie from "dexie";
export declare class TodoAppData extends Dexie {
  tasks: Dexie.Table<ITask, number>;
  filters: Dexie.Table<IFilter, string>;
  constructor();
  addTask: (task: ITask) => Promise<number>;
  deleteTask: (id: number) => Promise<void>;
  completeTask: (id: number, status: boolean) => Promise<void>;
  changeFilter: (filter: string, status: boolean) => Promise<number>;
}
export interface ITask {
  id?: number;
  title: string;
  completed?: boolean;
  deleted?: boolean;
}
export interface IFilter {
  id?: string;
  name: string;
  active: boolean;
}
