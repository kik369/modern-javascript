// callbacks & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
}

const callbackFunc = (value) => {
    console.log(value);
}

myFunc(callbackFunc);


let people = ['mark', 'cark', 'clark', 'dark', 'stark'];

const logPerson = (person, index) => {
    console.log(`${index}: ${person}`);
}

people.forEach(logPerson);

//callback inside foreach
// people.forEach((person, index) => {
//     console.log(index, person);
// });