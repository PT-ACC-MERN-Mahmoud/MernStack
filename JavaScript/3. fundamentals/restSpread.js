const animals = ["horse", "dog","fish", "cat", "bird"];
//const [firstAnimal, secondAnimal] = animals;
const [firstAnimal, secondAnimal, ...otherAnimals] = animals; otherAnimals //whis is this about?
console.log(animals);
console.log(firstAnimal, secondAnimal);
console.log(otherAnimals);

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

//const {firstName, lastName, ...attributes} = person;
//console.log(attributes);
//console.log(person);

const personCopy = { ...person };  //this will create a complete copy of the object person;
console.log(personCopy);


//rest is for arrays 
//spread is for dictionaries

console.log(personCopy === person);  //while the objects are not the same, the attributes are
console.log(personCopy.addresses === person.addresses);