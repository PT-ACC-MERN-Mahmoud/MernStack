import React, { useState } from 'react'

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const increment = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>{props.hairColor}</p>
            { age }
            <button onClick={increment}>Birthday Button for {props.firstName} </button>
        </div>
    )
}

export default PersonCard