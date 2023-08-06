/* eslint-disable */

console.log('it works');

const person = {
    first: "wes",
    last: "bos",
    age: 100,
  };


const hello = `hello my name is ${person.first}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
  <div>
    <h2>${person.first}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;