const Employee = require('lib/Employee');
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const employee = new Employee ('Jared', 456179, 'jharalson29@gmail.com');

test('can we get the object', () => {
    expect(employee.name).toBe('Jared')
    expect(employee.id).toBe(456179)
    expect(employee.email).toBe('jharalson29@gmail.com')
})

test('can we get the employee name', () => {
    expect(employee.getName()).toEqual(expect.any(String))
})

test('can we get employee id', () => {
    expect(employee.getId()).toEqual(expect.any(Number))
})

test ('can we get the employee email', () => {
    expect(employee.getEmail()).toEqual(expect.any(String))
})