
//Basic If Statement
/*let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance) {
        return 'Cannot afford! You are $${itemPrice - accountBalance} short';
    } else {
        return "Can afford!";
    }
};*/
//Ternary Statement

let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
        ? "Cannot afford! You are " + (itemPrice - accountBalance) + " short."
        : "Can Afford";
        //is the itemPrice . accountBalance
        //yes? then return "Cannot afford"
        // no then return "Can afford"
}

//Another example of the ternary function
console.log(canAfford(500, 400));

let myBankAccountBalance = 1000;
const drone = 1001;

let droneOnSale = drone - drone * 0.03;

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));

//Try not to nest ternary statements
const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false