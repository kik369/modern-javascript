// variables and block scope

let age = 30;

if (true) {
    let age = 20;
    let name = 'cark';
    console.log('inside 1st code block', age, name);

    if (true) {
        let age = 10;
        console.log('inside 2nd code block', age, name);
        var test = 'var variable';
    }
}

console.log('outside code block', age, name, test);

// variables declared in a code block are local to that code block
// var ignores local scope and is accessible globaly