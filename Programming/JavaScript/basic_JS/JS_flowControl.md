1. javascript, html, css basic control flow is from right to left and top to bottom.

1. if statement
    - ```js
      if (something > something) {
          'do this'
        } else {
          'do this'
        }
      ```
    - comparators and equality
      - `==` and `!=`

        equal and not equal sign but ignore the data type.
      - `===` and `!==`

        equal and not equal sign include the data type.
      - `>`

        greater to.
      - `<`

        smaller to.
      - `&&`

        'and'. to combine two condition and return true only if both true.
      -
2. while loop

    ```
    syntax:
    while (something is true){
      do this
    }
    ```
3. for loop ("syntactic sugar" of while loop)

    ```
    syntax:
    for (start; end; change;){
      do this
    }
    ```
    example:
    ```js
    for (var i=1; i<=3; i++){
      console.log(i);
    }
    ```
    the console will print out:
    ```
    1
    2
    3
    ```
4. for loop using Object.entries()
    ```
    syntax:
    for ([key, val] of Object.entries(a_dictionary)){
      do this
    }
    ```
    the `key` and `val` is a variable inside the for loop.
5. switch
    ```js
    switch (the_variable_to_look_up) {
      case 'if the value of variable is this string then':
      'do this';
      break;

      case 'if the value is this then':
      'do this';
      break;

      default:
      'do this if the variable doesnt match any cases';
    }
    ```
6. list.forEach(function(valueFromList){
  do_something
  })
