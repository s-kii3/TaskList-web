"use client";
import Item from "./Item";
import { useTaskList } from "../context/TaskContext"

const List = () => {
    const taskList = useTaskList();

    return (
      <>
        <div className="mt-4">
          <h4>タスク一覧</h4>
          <table className="table mt-4">
            <thead>
              <tr>
                <th>タスク</th>
                <th>期限</th>
                <th>更新</th>
                <th>削除</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((todo) => <Item todo={todo} key={todo.id}/>)}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default List;
