function get(url) {

  // ================ return the Promise Object
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onreadystatechange = function () {
      console.log(`readyState: ${this.readyState}`);
      console.log(`status: ${this.status}`);
      if (req.readyState == 4 && req.status == 200) {
        resolve(req.response);
      } else if (req.status != 200) {
        reject(Error(req.statusText));
      }
    };
  });
}

var thelist = document.querySelector('#faiz');
get('https://jsonplaceholder.typicode.com/users').then(function (response) {
  thelist.innerHTML += `<li>success! <br> ${response}</li>`;
}, function (error) {
  thelist.innerHTML += `<li>error! <br> ${error}</li>`;
});
// basic usage of promise object
