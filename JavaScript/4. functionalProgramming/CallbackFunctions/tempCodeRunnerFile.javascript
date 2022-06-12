var exampleFunction = function(message){
    console.log( message ); 
};
exampleFunction("Hello from example function");

//We can also pass in a function into another as a parameter
function parentFunction( callback ) {
    callback( " information from the parent function " );


parentFunction( exampleFunction );
}

parentFunction( function(message) {
    console.log( message );
});