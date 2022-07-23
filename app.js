const fs = require('fs')

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2)

// profileDataArr.forEach(profileItem => console.log(profileItem));

const [name, github] = profileDataArgs;



fs.writeFile('./index.html',generatePage(name,github), err => {
    // creates an exception and stops the execution of code
    if (err) throw err; 

    console.log('Portfolio complete! Check out index.html to see the output!')
});

