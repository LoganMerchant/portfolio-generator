const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Arrow notation is shorthand for function expressions
// One parameter requires no parentheses
// One action does not require curly braces
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i +=1) {
    console.log(profileDataArr[i]);
    };

    console.log("===================");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);