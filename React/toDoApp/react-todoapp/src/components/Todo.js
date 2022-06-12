import React, {useState} from 'react';
import{ RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

//create rfce react functional component to begin. 

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {  //what is this _remove; adding crud functionality to todo
        const [edit, setEdit] = useState({  //creating empty todo
        id: null,
        value: ''      //constructor
    });

const submitUpdate = value => {       //update todo with new value
        updateTodo(edit.id, value);   //keeps edit.id as hidden input,and requires new value.
        setEdit({
            id: null,
            value: ""
    });
};
    if (edit.id) {                 //if we get a todo by id, issue an edit form and and process the update upon submission
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) =>  (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}  //validate for complete data integrity, todo rows are classes assigned based on complation state.
            key={index}   // we need a key for the map function
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeTodo (todo.id)}
                className='delete-icon'
                />
                <TiEdit 
                    onClick={()  => setEdit({ id: todo.id, value: todo.text})} 
                    className='edit-icon'
                />   
            </div>
        </div>
    )); 
};

export default Todo;
