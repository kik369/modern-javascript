// async code
// http requests

const getTodos = (resource, callBack) => {
  // create a request object
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request.responseText);
      //   console.log(request.status);
      const data = JSON.parse(request.responseText);
      callBack(null, data);
    } else if (request.readyState === 4) {
      //   console.log('Could not fetch the data.');
      callBack('could not fetch data', null);
    }
  });

  // setting up the request (not sending yet)
  // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.open('GET', resource);
  // send the request
  request.send();
};

console.log(1);
console.log(2);

// convention is to pass (err, data)
getTodos('todos/1.json', (err, data) => {
  console.log(data);
  getTodos('todos/2.json', (err, data) => {
    console.log(data);
    getTodos('todos/3.json', (err, data) => {
      console.log(data);
    });
  });
  // if (err) {
  //   console.log(err);
  // } else {
  //   console.log(data);
  // }
});

console.log(3);
console.log(4);
