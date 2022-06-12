const person = {
    firstName : 'Bob',
    lastName : 'Marley',
    email: 'bob@marley.com',
    password : 'password',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500'
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const animals = ['horse','dog','fish','cat','bird'];

//BEFORE ES6
//var email = person.email;
//var firstAnimal = animals[0];

//console.log(email);  had to comment out these conflicts between before and after
//console.log(firstAnimal);
//console.log(animals[2]);

//AFTER ES6
//const { email } = person;          //curly ebrackets for email; const { } = dictionaryName;
//const [firstAnimal] = animals;     //square brackets for arrays; const [ ] = arrayName;
//console.log(email);                //round brackets for console.log 
// => bobmarley.com
//console.log(firstAnimal);          
// => horse

//BEFORE ES6
//var password = person.password;
//var secondAnimal = animals[1];
//var thirdAnimal = animals[2];

//console.log(email, "\n", password, "\n", firstAnimal, "\n", secondAnimal, "\n", thirdAnimal);

//const {email, password} = person;
//const [firstAnimal, secondAnimal, thirdAnimal] = animals;
//console.log(email, "\n", password, "\n", firstAnimal, "\n", secondAnimal, "\n", thirdAnimal);

//const Password = '12345';
//const { password } = person;  //these two lines raise an "already declared"

//const hashedPassword = person.password;  //this will work but it is unnessasary

//const { hashedPassword } = person  //will not throw an error, bit wont give us the information we need either

const password = '12345';
const { password: hashedPassword } = person;


console.log(hashedPassword);

const {addresses: [whiteHouse, sherlock] } = person;
//console.log(addresses);  //will throw an error beacuase addresss is no longer defined.

console.log(whiteHouse);
console.log(sherlock);

const {addresses:[ , {city: london}]} = person;
console.log(london);





















