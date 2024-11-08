"use client";
import { useState, useCallback } from "react";
import { useDispatchTaskList } from "../context/TaskContext"
import { format } from 'date-fns';
import TodoApi from "../api/TodoApi";

const Form = () => {
    const [task, setTask] = useState("");
    const [deadLine, setDeadLine] = useState("");
    const dispatch = useDispatchTaskList();

    const doSubmit = ((e) => {
      e.preventDefault();
      const date = format(new Date(deadLine), 'yyyy-MM-dd');
      TodoApi.post({task:task, deadLine:date}).then(todo => {
        console.log(todo[0]);
        dispatch({type:"add", task:{id:todo[0].id, task:todo[0].task, deadLine:todo[0].deadLine}});
      });
      setTask("");
      setDeadLine("");
    });


    return (
      <>
        <div className="mt-4">
          <form action="" onSubmit={doSubmit}>
            <label>タスク</label>
            <input type="text" className="" value={task} onChange={(e) => setTask(e.target.value)} required></input>
            <br />
            <label>期限</label>
            <input type="date" className="" value={deadLine} onChange={(e) => setDeadLine(e.target.value)} required></input>
            <br />
            <input type="submit" className="btn btn-primary mt-2" value="登録"></input>
          </form>
        </div>
      </>
    );
}

export default Form;
