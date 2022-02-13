// functions

// function expression
// parameter - name
// default parameter
const speak = function(name = 'clark') {
    console.log(`good day, ${name}`);
}; // need a semicolon after a function expression

// calling or invoking the function
greet();
greet();
greet();

// pass an argument
speak('cark');
// uses default ('clark')
speak();

// declaration
// declarations hoisted, expressions not hoisted
// hoisted to the top
function greet() {
    console.log('hi there');
} // don't need a semicolon here


// returning values
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log(area);