const fs = require('fs');

// =========================== LESSON ONE ================================

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
console.log(profileDataArgs);

// // Arrow notation is shorthand for function expressions
// // One parameter requires no parentheses
// // One action does not require curly braces
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i +=1) {
//     console.log(profileDataArr[i]);
//     };

//     console.log("===================");

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// =========================== END OF LESSON ONE ==========================

const generatePage = (userName, githubName) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name = "viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out "index.html" to see the output!');
});