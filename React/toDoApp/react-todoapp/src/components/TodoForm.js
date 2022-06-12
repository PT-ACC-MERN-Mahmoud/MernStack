import React, {useState, useEffect, useRef} from 'react'; //hooks go in curly brackets

function TodoForm(props)  {  //Function 1: Constructor; props are simular to parameters in other languages
    const [input, setInput] = useState(props.edit ? props.edit.value: ''); //ternary operator, why are these variable in sqaure brackets

const inputRef = useRef(null);  //takes the input and stores it into useRef to use it dynamically

useEffect(() => {
    inputRef.current.focus();  //focuses on input upon render
});

const handleChange = e => {   //handles changes in the input field
    setInput(e.target.value);  //set the change in the input field and set it as input
};

//what happens upon submission
const handleSubmit = e => {    //what is e
    e.preventDefault();     //will cancel if cancellable
    
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),  //generate id
        text: input                              //set Input
    });
    setInput('');
    };
    //This is both the add and update forms
    return (
        <form onSubmit={handleSubmit} className='todo-form'> 
            {props.edit ? (
            <>
            <input
                placeholder='Update yoou item' 
                value={input}
                onChange={handleChange}
                name='text' 
                ref={inputRef}
                className='todo-input edit'
            />
            <button onClick={handleSubmit} classname='todo-button edit'>
                Update
            </button>
            </>
            ) : (  //tenary conditional operator
                    //find out
                <>  
            <input
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
                Add todo
            </button>
        </>
        )}
        </form>
    );
}

export default TodoForm;


// 1. imports : react, useState, useRef, useEffect
// 2. Build the TodoForm Function
//     a. put both input and/or setInput into State
//     b. make sure focus is on input field on render
//     c. Handle Submission function
//         a. e.preventDefault();  validate for not _blank
//         b. set properies to the todo upon submission 
//         c. setInput('') of empty string
//     d. edit Form
//     e. ternary conditional
//     f. addform
// 3. Export ToDoForm

        
