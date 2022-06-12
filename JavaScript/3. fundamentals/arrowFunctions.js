//var sayHello = function(name) {
//console.log('Hello ' + name)
//};

const sayHello = (name) => {
    console.log('Hello ' + name)
}
sayHello("Jamal");

const sayHi = name => console.log('Hello ' ,{name});
sayHi();

//implicit returns
var sqaure = function(n) {
    return n * n;
};

console.log(sqaure(9));

const squares = n => n * n;  //no need for return statements, with arrow functions, returns are implicit.
console.log(squares(10));

//implicitly returning object via arrow functions
//can be done simularly to simple expression with a small caveat
const returnObjLonghand = () => {
    return {
        firstName: 'John',
        lastName: 'Wick'
    }
}

const returnObjs = () => {firstName: 'John', lastName; 'Wick'} 
//console.log(returnObjs.firstName, returnObjs.lastName)

const returnOb = () => ({firstName: 'John', lastName: 'Wick'})
returnOb();
console.log(returnOb());

const foo = () => ({bar:1})
console.log(foo());

/* class Deck {
    constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
                deck.push(this.createCard(suit, face));
        }
    }
    this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}

/* class Deck {
    constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
        suits.forEach(function (suit) {
            faces.forEach (function(face) {
                deck.push(this.createCard(suit, face));
        });
    });
    this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }

} this will throw an reability error because this has the wrong scope*/  

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        console.log(deck);
        suits.forEach (suit =>  {
            faces.forEach (face => {
                console.log(face);
                deck.push(this.createCard(suit, face));
            })
        })
        this.deck = deck;
        console.log(deck);
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}
const newDeck = new Deck;
console.log(newDeck); 

