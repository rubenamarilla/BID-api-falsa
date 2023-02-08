const { faker, Faker } = require("@faker-js/faker");

const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "This is an API of fake data using Faker" });
});

class User {
    constructor() {
        this.id = faker.random.numeric(7),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.number(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }
}

app.get("/api/users/new", (req, res) => {
    res.json({ users: new User() });
});

class Company {
    constructor() {
        this.id = faker.random.numeric(9),
        this.companyName = faker.company.name();
        this.adress = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}

app.get("/api/companies/new", (req, res) => {
    res.json({ company: new Company() });
});

app.get("/api/company/user", (req, res) => {
    res.json({ 
        company: new Company(),
        user: new User()
    });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));