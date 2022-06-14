
const add = (props) => {
    console.log("This is inside of the add function: ");
    console.log(props.num1 + props.num2);
return props.num1 + props.num2;
}

const props = {
    num1: -56,
    num2: 67
};

let sum = add(props);

console.log("This is the sum: ");
console.log(sum);
