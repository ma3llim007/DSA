/*
    HIGHER ORDER FUNCTION
    Higher Order Functions are functions that take other functions as arguments or return functions as their results.
*/
const InterView = (name) => {
    if (name === 'Jack') {
        return function (topic) {
            console.log(`Hi My Name Is ${name} And Your Topic Is ${topic}`);
        }
    }
    if (name === 'Mack') {
        return function (topic) {
            console.log(`Hi My Name Is ${name} And Your Topic Is ${topic}`);
        }
    }
    if (name === 'John') {
        return function (topic) {
            console.log(`Hi My Name Is ${name} And Your Topic Is ${topic}`);
        }
    } else {
        console.log("Welcome To Interview");
    }
}
InterView("Jack")("UI")
InterView("Mack")("Front End Developer")
InterView("John")("Back End Developer")
InterView("Sameer")