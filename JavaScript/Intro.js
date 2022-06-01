//camelcase
const theValueOfAge = 28;

//snakeCase
const the_value_of_age = 33;

//Arrays
const array = [1, 2, 3, 4, 5];
console.log(array[3]);

//objects and dictionaries
//key value pairs
const student = {
    name: 'John',
    age: 34,
    isMale: true,

};

console.log(student.name);
console.log(student['name']);


//Destructuring
const obj = {
    name: 'John',
    age: 28,
    city: 'New York',
    likes: ['food', 'movies', 'music'],
};

const {
    city,
    ...others
} = obj;
console.log(city);
console.log(others);




const {
    name,
    age
} = obj;
const {
    likes: fav
} = obj;
console.log(name, age);
console.log(fav);

const [firstItem, , lastItem] = fav;
console.log(firstItem, lastItem);