// the fetch api

// async functjion always returns a promise
const getTodos = async () => {
  const response = await fetch('todos/11.json');

  // creating custom errors
  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);
console.log(3);

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err));

console.log(4);
console.log(5);
console.log(6);

// promise rejected only if network error (offline, timeout...), 404 is resolved
// fetch('todos/1.json')
//   .then(response => {
//     console.log('resolved', response);
//     // response.json() returns a promise
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('rejected', err);
//   });
