
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
    
};
const createUserComp = () => {
    return {
        "password": faker.internet.password(),
        "email": faker.internet.email(),
        "phoneNumber": faker.phone.phoneNumber(),
        "lastName": faker.name.lastName(),
        "firstName": faker.name.firstName(),
        "_id": faker.datatype.uuid(),
        "break": faker.system.commonFileName(''),
        "_idComp": faker.datatype.uuid(),
        "Name": faker.company.companyName(),
        "Address": {
            "street": faker.address.streetAddress(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
};
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
    }
};

const app = express();
app.get("/api/users/new", (_req, res) => {
    res.send(createUser())
});
app.get("/api/apple/new", (_req, res) => {
    res.send(createUserComp())
});
app.get("/api/company/new", (_req, res) => {
    res.send(createCompany())
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}`)
);


