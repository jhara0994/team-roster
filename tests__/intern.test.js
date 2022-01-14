const Intern = require('../lib/Intern')
const intern = new Intern('Tommy', 406789, 'tommyk@gmail.com', 'GSU')

test('can we get intern object', () => {
    expect(intern.school).toEqual(expect.any(String))
})

test('can we get intern school object', () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})

test('can we get intern role object', () => {
    expect(intern.getRole()).toEqual('Intern')
})