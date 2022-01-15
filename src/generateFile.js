const generatePage = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Team Profile Generator</h1>
        </header>
        <main>
            <div class="container">
                <div class="row" id="team-cards">
                    <!--Team Cards-->
                    $(employeeCards)
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
`
}

const createManager = function (manager) {
    return `
    <div class="card">
        <div class="card-header">
            <h3 class="name" id="manager-name">${manager.name} </h3>
            <h4 class="title" id="manager">Title: Manager </h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto: ${manager.email}"</p>
            <p class="office-num">Office #: ${manager.officeNumber} </p>
        </div>
    </div>
    `
}

const createEngineer = function (engineer) {
    return `
    <div class="card">
        <div class="card-header">
            <h3 class="name" id="employee-name">Employee: ${engineer.name}</h3>
            <h4 class="title">Title: Engineer </h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email} </p>
            <p class="github">Github: <a href="https://github.com/${engineer.github} </p>
        </div>
    </div>
    `
}

const createIntern = function (intern) {
    return `
    <div class="card">
        <div class="card-header">
            <h3 class="name" id="employee-name">${intern.name} </h3>
            <h4 class="title">Title: Intern </h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id} </p>
            <p class="email">Email: <a href="mailto:${intern.email}"</p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
    `
}

generateFile = (data) => {

    pageArray =[]

    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole()

    if (role === 'Manager') {
        const managerCard = createManager(employee)

        pageArray.push(managerCard)
    }
    if (role === 'Engineer') {
        const engineerCard = createEngineer(employee)

        pageArray.push(engineerCard)
    }
    if (role === 'Intern') {
        const internCard = createIntern(employee)

        pageArray.push(internCard)
    }
}
const employeeCards = pageArray.join('')

const createTeam = generatePage(employeeCards)
return createTeam;
}

module.exports = generateFile;