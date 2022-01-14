const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Jared', 905264, 'jharalson29@gmail.com', 'github.com/jhara0994')

test('can we get engineer object', () => {
    expect(engineer.github).toEqual(expect.any(String))
})

test('can we get the engineer github value', () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
})

test('can we get the role object', () => {
    expect(engineer.getRole()).toEqual("Engineer")

})