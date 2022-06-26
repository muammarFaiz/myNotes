```js
// in Promise application for XMLHttpRequest, the bread is a function that return new promise instead of a
// var / the promise itself.
var bread = new Promise(function (res, rej) {
  // this block of code is not recommended, because the changeRed function will
  // executed first before the setTimeout callback function `console.log(bowl)`.
  // setTimeout(function () {
  //   console.log(bowl);
  // }, 2000);
  // changeRed(bowl);

  // inside the promise/the production code, each block of code still race to eachothers/asyncronous.
  // only in the consumption code, the function inside the
  // `.then` that await the function before `.then` to finish.
  // if (bowl.color == 'red') {
  //   res('the global var is changed');
  // }
  // else if (bowl.color == 'black') {
  //   rej('the global var remain un-changed');
  // }

  // if both res and rej exist at the same time without the if condition to choose, then
  // the choosen one is depend on which argument (res/rej) is called first, because promise will
  // always return one result.
  // if rej is called first then the result will be taken as an error/rejected because rej is
  // the second argument. example:
  // `new promise(function(res, rej) {})` therefore the second callback
  // function of the .then that will be executed
  rej('the global var remain un-changed');
  res('the global var is changed');
});
```
```js
bread
.then(function(value) {return delayandchange(value + ' + resolve');}, function(value) {return delayandchange(value);})
.then(function(value) {
  displayer(value);
  alert('resolve');
}, function(value) {
  displayer(value);
  alert('reject');
});
```
if in the first `.then` the second callback is the one executed (error/rejected), then

the second `.then` will receive the returned value as resolve/execute the first callback for it. because

the first `.then` return a value which is not a Promise object, therefore it will accepted as 'resolve'.
