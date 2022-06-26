function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;

  // ========================= the try throw catch technique xD
  // seems like a great way to keep your code "DRY"
  try {
    if(x == "") throw "Input is empty";
    if (isNaN(x)) throw "Input is not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
      else if(x > 10) throw "Input is too high";
      else {
        message.innerHTML = 'correct motherfucker';
      }
  } catch (e) {
    message.innerHTML = e;
  } finally {

  }
} //myFunction ending
