const  val = [1,2,3,4,5,];
const oddCubes = val.filter( val => val % 2 !==0).map( val => val**3 );
console.log(oddCubes);