
const express = require('express');
const faker = require('faker');

const createUser = () => {
    return {
        "password": faker.internet.password(),
        "email": faker.internet.email(),
        "phoneNumber": faker.phone.phoneNumber(),
        "lastName": faker.name.lastName(),
        "firstName": faker.name.firstName(),
        "_id": faker.datatype.uuid()
    }
    
}
const createCompany = () => {
    return {
        "_id": faker.datatype.uuid(),
        "Name": faker.company.companyName(),
        "Address": {
            "street": faker.address.streetAddress(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    };
const createUserComp = () => {
    return {
        "password": faker.internet.password(),
        "email": faker.internet.email(),
        "phoneNumber": faker.phone.phoneNumber(),
        "lastName": faker.name.lastName(),
        "firstName": faker.name.firstName(),
        "_id": faker.datatype.uuid(),
        "_idComp": faker.datatype.uuid(),
        "Name": faker.company.companyName(),
        "Address": {
            "street": faker.address.streetAddress(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    };

};
const app = express();
app.get("/api/users/new", (req, res) => {
    res.send(createUser())
})
app.get("/api/company/new", (req, res) => {
    res.send(createCompany())
})
app.get("api/usercomp/new", (req, res) => {
    res.send(createUserComp())
})

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}`)
);


