// employees.js
var faker = require('faker');

const gender_enum = {
  male: 'male',
  female: 'female',
  other: 'other',
};

const status_enum = {
  working: 'working',
  quit: 'quit',
};

const role_enum = {
  DEV: 'DEV',
  QC: 'QC',
  SM: 'SM',
  PM: 'PM',
};

function generateEmployees() {
  const employees = [];
  for (var id = 0; id <= 300; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const joinedDate = faker.date.past();
    const avatar = faker.image.avatar();

    const gender_rand = Math.floor(
      Math.random() * Object.keys(gender_enum).length
    );
    const gender = gender_enum[Object.keys(gender_enum)[gender_rand]];

    const birthday = faker.date.past();
    const email = faker.internet.email();
    const address = faker.address.streetAddress();

    const role_rand = Math.floor(Math.random() * Object.keys(role_enum).length);
    const role = role_enum[Object.keys(role_enum)[role_rand]];
    const level = Math.floor(Math.random() * 4) + 1;

    const rand = Math.floor(Math.random() * Object.keys(status_enum).length);
    const status = status_enum[Object.keys(status_enum)[rand]];
    employees.push({
      id,
      firstName,
      lastName,
      joinedDate,
      avatar,
      gender,
      birthday,
      email,
      address,
      role,
      level,
      status,
    });
  }
  return { employees: employees };
}
module.exports = generateEmployees;

//json-server employees.js
