import { useState } from "react";
import { NextComponentType } from "next";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector} from "react-redux";
import { addTodo } from "../store/reducers/todo/todoSlice";
import { RootState } from "../store/reducers";
import { Todo } from "../store/reducers/types";

const TodoList : NextComponentType = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state : RootState) => state.todos);

    const [text, setText] = useState('');
    const onChange = (e : any) => setText(e.target.value);
    const onSubmit = (e : any) => {
        e.preventDefault();
        if(!text.trim())
            alert('Please enter some text')
        dispatch(addTodo(text));
        setText("")
    };

    return (
        <div>
            <hr />
            <h1>Todo List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} placeholder="Enter your Task" />
                <input type="submit" value={"Add"} />
            </form>
            <ol>
                {
                    todos.length > 0 ? todos.map((todo : Todo) => <TodoItem key={todo.id} todo={todo} />) : (
                        <p>No Task to do</p>
                    )
                }
            </ol>
        </div>
    )
}

export default TodoList;