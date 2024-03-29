/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { IFilter, ITask, TodoAppData } from "./services/todoDbService";
export namespace Components {
    interface TodoApp {
        "getTodoService": () => Promise<TodoAppData>;
        "show": ("header" | "list" | "footer")[];
    }
    interface TodoFooter {
        "activefilters": string[];
        "filters": IFilter[];
        "tasks": ITask[];
    }
    interface TodoHeader {
    }
    interface TodoList {
        "activefilters": string[];
        "tasks": ITask[];
    }
}
declare global {
    interface HTMLTodoAppElement extends Components.TodoApp, HTMLStencilElement {
    }
    var HTMLTodoAppElement: {
        prototype: HTMLTodoAppElement;
        new (): HTMLTodoAppElement;
    };
    interface HTMLTodoFooterElement extends Components.TodoFooter, HTMLStencilElement {
    }
    var HTMLTodoFooterElement: {
        prototype: HTMLTodoFooterElement;
        new (): HTMLTodoFooterElement;
    };
    interface HTMLTodoHeaderElement extends Components.TodoHeader, HTMLStencilElement {
    }
    var HTMLTodoHeaderElement: {
        prototype: HTMLTodoHeaderElement;
        new (): HTMLTodoHeaderElement;
    };
    interface HTMLTodoListElement extends Components.TodoList, HTMLStencilElement {
    }
    var HTMLTodoListElement: {
        prototype: HTMLTodoListElement;
        new (): HTMLTodoListElement;
    };
    interface HTMLElementTagNameMap {
        "todo-app": HTMLTodoAppElement;
        "todo-footer": HTMLTodoFooterElement;
        "todo-header": HTMLTodoHeaderElement;
        "todo-list": HTMLTodoListElement;
    }
}
declare namespace LocalJSX {
    interface TodoApp {
        "show"?: ("header" | "list" | "footer")[];
    }
    interface TodoFooter {
        "activefilters"?: string[];
        "filters"?: IFilter[];
        "onClear"?: (event: CustomEvent<any>) => void;
        "onFilterToggle"?: (event: CustomEvent<IFilter>) => void;
        "tasks"?: ITask[];
    }
    interface TodoHeader {
        "onAddTask"?: (event: CustomEvent<string>) => void;
    }
    interface TodoList {
        "activefilters"?: string[];
        "onCompleteTask"?: (event: CustomEvent<{ id: number, completed: boolean }>) => void;
        "onDeleteTask"?: (event: CustomEvent<number>) => void;
        "tasks"?: ITask[];
    }
    interface IntrinsicElements {
        "todo-app": TodoApp;
        "todo-footer": TodoFooter;
        "todo-header": TodoHeader;
        "todo-list": TodoList;
    }
}
export { LocalJSX as JSX, TodoAppData };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "todo-app": LocalJSX.TodoApp & JSXBase.HTMLAttributes<HTMLTodoAppElement>;
            "todo-footer": LocalJSX.TodoFooter & JSXBase.HTMLAttributes<HTMLTodoFooterElement>;
            "todo-header": LocalJSX.TodoHeader & JSXBase.HTMLAttributes<HTMLTodoHeaderElement>;
            "todo-list": LocalJSX.TodoList & JSXBase.HTMLAttributes<HTMLTodoListElement>;
        }
    }
}
