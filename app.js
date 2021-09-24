const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'GitHub username',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
    
    portfolioData.projects = [];
    console.log(`
=================
Add a New Project
=================
`);

if (!portfolioData.projects) {
    portfolioData.projects = [];
}
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Project name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('What is the project name?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Project description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('A description is needed!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'language',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES^', 'jQuery', 'Bootstrap', 'Node'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('What methods did you use?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Project Github link',
            message: 'Enter the Project Github link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Give me a link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to enter another project?',
            default: true,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
    ]);
};

promptUser()
{
    type: 'confirm',
    name: 'confirmAbout',
    mesage: 'Would you like to enter some information about yourself for an "About" section?',
    default: true
},'{
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself:',
    when: ([confirmAbout]) => {
        if (confirmAbout) {
            return true;
        } else {
            return false;
        }
    }



    
// promptUser()
//     .then(answers => console.log(answers))
//     .then(promptProject)
//     .then(projectAnswers => console.log(projectAnswers));

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         }
//     ])
//     .then(answers => console.log(answers));