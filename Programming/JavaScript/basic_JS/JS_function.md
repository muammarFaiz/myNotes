1. initial:

    ```js
    function function_name() {

        alert('hey')
        alert('hey hey')

      }
      ```
2. calling the function: `function_name();`
3. function can have objects and another function as a 'callback', a callback is to force the first task to
finish first before the second task run, unlike regular javascript which doesn't wait the first task to finish to run the second task.
    ```js
    function function_name(carBrand, carfunctionCallback) {

        var tools = {
          chair: 2,
          hammer: 1,
          food: true,
          distance: 20,
          car: carBrand,
        }
        function carfunctionCallback(distance)
      }

      //calling the function and callback:
      function_name('volvo', function () {
        console.log('this is what our callback function do')
      })
      ```
4. arrow sign `this` vs regular function `this`

    example:
    ```js
    document.querySelector("#\\31 2-arrow-function").addEventListener('click', () => {
    console.log(`arrow: ${this}`)
    })
    document.querySelector("#\\31 2-arrow-function").addEventListener('click', function () {
        console.log(`regular: ${this}`)
    })
    ```
    if the object is clicked then the console will return this:
    `arrow: [object Window]`

    `regular: [object HTMLHeadingElement]`

    as you can see the `this` inside the arrow function is lexical which mean it return the same value as its parent `this`.
5. the `new` keyword

    just like in python class, a variable can be assigned to a class, javascript can use it with just regular function by using the `new` keyword after the `=` assignment.

    example:
    ```js
    function car(name) {
      this.name = name;
    }
    ```
    `var volvo = new car('volvo')`

    the variable `volvo` is now an object with `{ name: "volvo" }`

    the arrow sign function cannot use the `new` sign.
