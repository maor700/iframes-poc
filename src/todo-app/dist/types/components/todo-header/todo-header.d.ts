import { EventEmitter } from '../../stencil-public-runtime';
export declare class TodoHeader {
  addTask: EventEmitter<string>;
  title: string;
  render(): any;
}
