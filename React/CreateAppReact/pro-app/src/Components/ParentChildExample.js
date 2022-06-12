import React from 'react';

//A parent component is any component that calls another component
    //from inside their own return statement
const ParentComponent = (props) => {
    return (
        <div>
            <ChildComponent firstName={"Kevin"} lastName={"Smith"} />
        </div>
    );
}

//React will mautomatically create a javascript object named "props"
// using the attributes we added when we called the ChildComponent
// in our Parent Component
const ChildComponent = (props) => {
    return (
        <p>
            Hello, My name is { props.firstname } { props.lastName }
        </p>
    )
};

//Props in this example would look like this:
// props = {
//    firstName: "Kevin",
//    lastName: "John",
//}
    