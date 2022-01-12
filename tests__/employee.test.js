const Employee = require('..lib/Employee');
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const employee = new Employee ('Jared', '456179', 'jharalson29@gmail.com');

test('can we get the values', () => {
    expect(employee.name).toBe('Jared')
    expect(employee.id).toBe('456179')
    expect(employee.email).toBe('jharalson29@gmail.com')

})