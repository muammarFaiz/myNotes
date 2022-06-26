const ultag = document.getElementById('faiz');
const inputText = document.getElementById('demo');

// const axios = require('axios');

function pablo () {
  console.log(inputText.value);
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(value => {
    console.log(value.data);
    ultag.innerHTML += `<li>${JSON.stringify(value.data)}</li>`;
    return value;
  });
}
// .then(value => console.log(value));

// JSON.parse(value.data)
