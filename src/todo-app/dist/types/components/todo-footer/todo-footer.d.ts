import { EventEmitter } from '../../stencil-public-runtime';
import { IFilter, ITask } from '../../services/todoDbService';
export declare class TodoFooter {
  filterToggle: EventEmitter<IFilter>;
  clear: EventEmitter;
  activefilters: string[];
  filters: IFilter[];
  tasks: ITask[];
  render(): any;
}
