const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10},
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25}
]

const filteredItems = items.filter((item) => {
    return items.price <= 100;
});

console.log(filteredItems)
console.log(items)

//map
const itemNames = items.map((item) => { //arrow function
    return item.name //item singular
})
console.log(itemNames) //function name

const findItem = items.find((item) => {
    return item.name === "Album"
})
console.log(findItem)

items.forEach((item) => {
    console.log(item.name)
});

const hasInexpensiveItems = items.some((items) => {
    return items.price <= 100

})

console.log(hasInexpensiveItems)

const hasInexpensiveItem = items.every((items) => {
    return items.price <= 1000
});
console.log(hasInexpensiveItem)

const total = items.reduce((currrentTotal, items) => {
    return items.price + currrentTotal

}, 0);
console.log(total)










