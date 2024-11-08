"use client";
import { useState } from "react";
import { useDispatchTaskList} from "../context/TaskContext"
import TodoApi from "../api/TodoApi";

const Item = ({todo}) => {
    const dispatch = useDispatchTaskList();
    const [editing, setEditing] = useState(false);
    const [task, setTask] = useState(todo.task);
    const [deadLine, setDeadLine] = useState(todo.deadLine);

    const doDelete = async (todo) => {
      TodoApi.delete(todo.id).then(() => {
        dispatch({type:"delete", id:todo.id});
      });
    }

    const doEditing = () => {
      setEditing(!editing);
    }

    const doUpdate = () => {
      const newTodo = {id:todo.id, task:task, deadLine:deadLine}
      TodoApi.patch(newTodo).then(() => {
        dispatch({type:"patch", task:newTodo});
      });
      setEditing(!editing);
    }

    return (
      <>
        {editing ? (
          <tr>
            <td><input type="text" className="" value={task} onChange={(e) => setTask(e.target.value)} required></input></td>
            <td><input type="date" className="" value={deadLine} onChange={(e) => setDeadLine(e.target.value)} required></input></td>
            <td><button onClick={() => doUpdate(task, deadLine)}>更新</button></td>
            <td><button onClick={() => doDelete(todo)}>削除</button></td>
          </tr>
        ) : (
          <tr>
            <td>{todo.task}</td>
            <td>{todo.deadLine}</td>
            <td><button onClick={() => doEditing(todo)}>編集</button></td>
            <td><button onClick={() => doDelete(todo)}>削除</button></td>
          </tr>
        )}
      </>
    );
}

export default Item;
