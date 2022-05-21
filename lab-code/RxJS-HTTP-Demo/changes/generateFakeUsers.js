const faker = require('faker');
const fs = require('fs')


// Utilize the standard Math library from JavaScript
// to generate a random number between min and max
// We cannot use the functions from faker.js
// since it this only returns strings
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function generateUsers(numUsers) {

  let users = [];

  for (let id = 1; id <= numUsers; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let age = getRndInteger(20, 71);
    let dept = faker.commerce.department();
    users.push({
        "id": id,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "age": age,
        "dept" : dept
    });
  }

  return { "users": users }
}

// specify the actual number of random users that you want to generate
let dataObj = generateUsers(50);

fs.writeFileSync('users.json', JSON.stringify(dataObj, null, '\t'));