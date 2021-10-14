import { IFilter, ITask, TodoAppData } from "../../services/todoDbService";
export declare class TodoApp {
  show: ("header" | "list" | "footer")[];
  todoService: TodoAppData;
  tasks: ITask[];
  filters: IFilter[];
  getTodoService(): Promise<TodoAppData>;
  componentDidLoad(): void;
  render(): any;
}
