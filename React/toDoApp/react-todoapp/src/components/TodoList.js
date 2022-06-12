import { useState }  from 'react'; //we need access to this list in different parts of the program and so, we store the list in State.
import ToDo from './Todo';         //we import todo to populate the list of todos
import ToDoForm from './TodoForm'; //we import ToDoForm in order to create todos, which in turn create items in the list

const ToDoList = () => {
    const [todos, setTodos] = useState([]); //storing input to state


const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) { //Validating input is not blank
        return;
    }
        
    const newTodos = [todo, ...todos]; //creating an empty array for newtodos, this is called spread
    
    setTodos(newTodos);      //setting the list with newTodos
    console.log(...todos);   //should reflect the new addition 
    };



const updateToDo = (todoId, newValue) => {                      //to update a todo, we need the id of the todo and its current value
    if(!newValue.text || /^\s*$/.test(newValue.text)) {               //Validating for notblank for new submission
    return;
    }
    
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))      //writing new value over previos map

};

const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);  //filtering array of todos to isolate target todo

        setTodos(removeArr); //setting new state of todos minus target todo
    };

    
    console.log(todos)  //should reflect deletion
    

//we validate the data of updated todos by checking for id matches of previous state of to and the current update before setting new state. 
const completeTodo = id => {   
    let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete; //this syntax sets the state of isComplete based on the boolean id match check. 
        }
        return todo;  //return the todos to be updated
    });
    setTodos(updatedTodos);  // setting updated todo state 
};

    return ( 
        <>
            <h1> What's the Plan for Today?</h1>   {/*the function returns the following functionalities to the browser */}
            <ToDoForm onSubmit= {addTodo}/> 
            <ToDo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateToDo} 
        />    
        </>
    );
}
export default ToDoList;

// summary of TodoList function
//     1. import react with useState, TodoForm, and ToDo.
//     2. Store todo and todos in useState.
//     3. Add todo function.
//     4. Add the update function.
//     5. Add the remove function.
//     6. Add the complete function.
//     7. Return the full functionality of the TodoList to the browser.
