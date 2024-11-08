import Link from "next/link";
import Form from "../components/Form";
import List from "../components/List";
import { TaskListProvider } from "../context/TaskContext"

const Todo = () => {
  return(
    <>
      <h1>タスク管理アプリケーション</h1>
      <TaskListProvider>
        <Form />
        <List />
      </TaskListProvider>
      <Link href="/">
        TOPへ戻る
      </Link>
    </>
  );
}

export default Todo;
