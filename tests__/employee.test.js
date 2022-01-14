const Employee = require('../lib/Employee');
const employee = new Employee ('Bob', 456179, 'bobt@gmail.com');

test('can we get the object', () => {
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

test('can we get the employee name', () => {
    expect(employee.getName()).toEqual(expect.any(String))
})

test('can we get employee id', () => {
    expect(employee.getId()).toEqual(expect.any(Number))
})

test ('can we get the employee email', () => {
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

test ('can we get employee role', () => {
    expect(employee.getRole()).toEqual("Employee")

})