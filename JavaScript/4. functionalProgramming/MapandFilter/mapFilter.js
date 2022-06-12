//In functional programming, many of the functions take on the responsibilities of classic data structures
const groceries = ["pearl onions", "cremini", "thyme"];
const groceryList = groceries.map( item => '<li>{item}</li>');
const oFoods = groceries.filter( item => item.includes("o"));
console.log(oFoods)
console.log(groceryList);   //????




//Map with an array of numbers
const values = [1,2,3,4,5,];
const cubes = values.map( val => val**3 );
console.log(cubes);

//the filter function
const value = [1,2,3,4,5,];
const even = value.filter( val => val %2 === 0 );
console.log(even);

//filter method again
const grocerie = ["pearl onion", "cremini mushrooms", "thyme" ];
const oFood = groceries.filter( item => item.includes("y"));
console.log(oFood);

//chaining map and filter
const  val = [1,2,3,4,5,];
const oddCubes = val.filter( val => val % 2 !==0).map( val => val**3 );
console.log(oddCubes);




