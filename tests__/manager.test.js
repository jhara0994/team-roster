const Manager = require('../lib/Manager');
const manager = new Manager('Samantha', 657321, 'walker7sam@yahoo.com', 72)

test('can we get manager object', () => {
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('can we get the role of employee', () => {
    expect(manager.getRole()).toEqual("Manager")
})

