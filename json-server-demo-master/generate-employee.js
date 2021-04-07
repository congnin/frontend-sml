const faker = require('faker');
const fs = require('fs');

// Set locale to use Vietnamese
faker.locale = 'vi';

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

const randomEmployeeList = (n) => {
  if (n <= 0) return [];

  const employeeList = [];

  // loop and push category
  for (let id = 0; id <= n; id++) {
    const name = faker.name.findName();
    const joinedDate = faker.date.past();
    const avatar = faker.image.imageUrl(400, 400);

    const gender_rand = Math.floor(Math.random() * Object.keys(gender_enum).length);
    const gender = gender_enum[Object.keys(gender_enum)[gender_rand]];

    const birthday = faker.date.past();
    const email = faker.internet.email();
    const address = faker.address.streetAddress();

    const role_rand = Math.floor(Math.random() * Object.keys(role_enum).length);
    const role = role_enum[Object.keys(role_enum)[role_rand]];
    const level = Math.floor(Math.random() * 4) + 1;

    const rand = Math.floor(Math.random() * Object.keys(status_enum).length);
    const status = status_enum[Object.keys(status_enum)[rand]];
    employeeList.push({
      id,
      name,
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
  return employeeList;
};

// IFFE
(() => {
  // random data
  const employeeList = randomEmployeeList(300);

  // prepare db object
  const db = {
    employees: employeeList,
  };

  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully =))');
  });
})();
