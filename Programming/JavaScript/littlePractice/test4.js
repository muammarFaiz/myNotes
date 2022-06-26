var bowl = { color: 'black' };

function changeRed (xxx) {
  xxx.color = 'red';
}
function displayer (string) {
  document.getElementById('p01').innerHTML = string;
}
function delayandchange(astring) {
  let pablo = astring += ' XXXX';
  return pablo;
}
function newPromiseforError () {
  return new Promise(function(res, rej) {
    rej('i am rejected');
    res('i am resolved');
  });
}

var bread = new Promise(function (res, rej) {
  // changeRed(bowl);
  // setTimeout(function () {
  //   console.log(bowl);
  // }, 2000);

  // inside the promise/the production code, each block of code still race to eachothers/asyncronous.
  // only in the consumption code, the function inside the .then that await the function before it to finish.
  // if (bowl.color == 'red') {
  //   res('the global var is changed');
  // }
  // else if (bowl.color == 'black') {
  //   rej('the global var remain un-changed');
  // }

  // if both res and rej exist at the same time without the if condition to choose, then
  // the choosen one is depend on which argument (res/rej) is called first, because promise will
  // always return one result.
  // if rej is is called first then the result will be taken as an error/rejected because rej argument is
  // the second argument. example: new promise(function(res, rej) {}) therefore the second callback
  // function of the .then that will be executed
  rej('the global var remain un-changed');
  res('the global var is changed');
});
bread.then(function(value) {return delayandchange(value + ' + resolve');})
.catch(function(value) {return newPromiseforError(value);})
.then(function(value) {
  // console.log(value)
  displayer(value);
  alert('resolve');
})
.catch(function(value) {
  displayer(value);
  alert('reject');
});
// console.log(bowl);
