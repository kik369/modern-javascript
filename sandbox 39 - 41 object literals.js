// object literals
// method is a function defined on an object

const blogs = [
    { title: 'blog one', likes: 30 },
    { title: 'blog too', likes: 300 }
]

let user = {
    name: 'cark',
    age: 30,
    email: 'name@email.com',
    location: 'london',
    blogs: [
        { title: 'blog one', likes: 30 },
        { title: 'blog too', likes: 300 }
    ],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user logged out');
    },
    // arrow functions won't work inside an object, can use the bove or below
    logBlogs() {
        console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(`The blog ${blog.title} has ${blog.likes} likes`);
        });
    }
};

user.login();
user.logout();
user.logBlogs();

console.log(blogs);