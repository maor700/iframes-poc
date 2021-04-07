import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { db } from "../../App";
import { liveQuery } from "dexie";
import { TodoApp, TodoFooter, TodoHeader, TodoList } from "../../todo-react/components";

type TodoParts = "header" | "list" | "footer";

export function StateManagmentDexieIframe() {
  const [title, setTitle] = useState<TodoParts>();

  const tasks = useLiveQuery(() => db.tasks.toArray(), [], []);
  const filters = useLiveQuery(() => db.filters.toArray(), [], []);

  useEffect(() => {
    const title: TodoParts = new URL(window.location.href)?.searchParams.get("title") as TodoParts;
    title && setTitle(title);
  }, []);

  const activeFilters = filters?.filter(({ active }:any) => active).map(({ name }:any) => name)
  const TasksToRender = tasks?.filter(({ completed, deleted }:any) => {
    return (completed && activeFilters?.includes("completed"))
      ||
      (!deleted && !completed && activeFilters?.includes("pending"));
  })
  return <>
    {title?.includes("header") ? <TodoHeader onAddTask={({ detail: title }) => db.addTask({ title, completed: false, deleted: false })} /> : null}
    {title?.includes("list") ? <TodoList
      tasks={TasksToRender}
      onCompleteTask={({ detail }) => { db.completeTask(detail.id, detail.completed) }}
      onDeleteTask={({ detail: id }) => db.deleteTask(id)} activefilters={activeFilters}
    /> : null}
    {title?.includes("footer") ? <TodoFooter
      onFilterToggle={({ detail }) => db.changeFilter(detail.name, detail.active)}
      onClear={() => db.tasks.clear()}
      tasks={tasks} filters={filters}
    /> : null}
  </>;
}