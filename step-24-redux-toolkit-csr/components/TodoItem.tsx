import { NextComponentType } from "next";
import { BaseContext } from "next/dist/shared/lib/utils";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/reducers/todo/todoSlice";
import { Todo } from "../store/reducers/types";

const TodoItem : NextComponentType<BaseContext, {}, { todo : Todo }> = ({todo : {id, text}}) => {
    const dispatch = useDispatch();
    const deleteTask = (e:any) => {
        e.preventDefault();
        dispatch(deleteTodo(id))
    }
    return (
        <li key={id}>
            <span>{text}</span><button onClick={deleteTask} style={{marginLeft: '10px'}}>x</button>
        </li>
    )
}

export default TodoItem;