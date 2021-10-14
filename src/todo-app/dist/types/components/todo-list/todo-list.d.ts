import { EventEmitter } from '../../stencil-public-runtime';
import { ITask } from '../../services/todoDbService';
export declare class TodoList {
  completeTask: EventEmitter<{
    id: number;
    completed: boolean;
  }>;
  deleteTask: EventEmitter<number>;
  activefilters: string[];
  tasks: ITask[];
  render(): any;
}
