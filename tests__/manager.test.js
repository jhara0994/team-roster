const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('../lib/Employee');
const manager = new Manager('Samantha', 657321, 'walker7sam@yahoo.com', 7)

test('can we get manager object', () => {
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('can we get the role object', () => {
    expect(manager.getRole()).toEqual("Manager")
})

