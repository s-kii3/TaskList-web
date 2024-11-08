"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import TodoApi from "../api/TodoApi";

const TaskListContext = createContext();
const TaskListDispatchContext = createContext();

const taskListReducer = (taskList, action) =>{
    let newTaskList = null;
    switch(action.type){
        case "init":
            newTaskList = [...action.tasks];
            break;
        case "add":
            newTaskList = [...taskList, action.task]
            break;
        case "delete":
            newTaskList = taskList.filter((task) => {
                return task.id !== action.id;
            });
            break;
        case "patch":
            newTaskList = taskList.map((task) => {
                return task.id === action.task.id
                ? { ...task, ...action.task }
                : { ...task };
            });
            break;
        default:
            newTaskList = taskList;
    }
    return newTaskList.sort((a, b) => new Date(a.deadLine).getTime() - new Date(b.deadLine).getTime());
}

const TaskListProvider = ({children}) => {
    const [taskList, dispatch] = useReducer(taskListReducer, []);

    useEffect(() => {
        TodoApi.getAll().then(tasks => {
            dispatch({type:"init", tasks});
        });
    }, []);

    return (
        <TaskListContext.Provider value={taskList}>
            <TaskListDispatchContext.Provider value={dispatch}>
                {children}
            </TaskListDispatchContext.Provider>
        </TaskListContext.Provider>
    );
}

const useTaskList = () => useContext(TaskListContext);
const useDispatchTaskList = () => useContext(TaskListDispatchContext);

export { useTaskList, useDispatchTaskList, TaskListProvider };
