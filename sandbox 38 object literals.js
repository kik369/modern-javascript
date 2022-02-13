// objects
// object literal notation

let user = {
    name: 'cark',
    age: 30,
    email: 'name@email.com',
    location: 'london',
    blogs: ['blog one', 'blog too']
};

console.log(user);

// two wats how to access name
console.log(user.name);
console.log(user['name']);

user['name'] = 'clark';

user.age = 20;
console.log(user.age);

console.log(typeof user);