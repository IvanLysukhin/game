module.exports = () => {
  const faker = require('faker');
  const data = {contacts: []}

  for (let i = 1; i <= 10; i++) {
    data.contacts.push({
      id: i,
      name:  faker.name.findName(),
      avatar:  faker.image.avatar(),
      number: faker.phone.phoneNumberFormat(''),
    })
  }
  return data
}
