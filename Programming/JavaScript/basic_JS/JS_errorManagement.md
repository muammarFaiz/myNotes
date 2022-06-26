1. try & catch

    can be used to manage errors/do something if error happen.
    ```js
    try {
      adddlert("Welcome guest!");
      if (a == 1) {
        throw 'awww error'
      }
    }
    catch(err) {
      document.getElementById("demo").innerHTML = err.message;
    }
    ```
    in above example the `adddlert` function is not defined therefore it will result an error.

    JavaScript will actually create an Error object with two properties: name and message.

    When an error occurs, JavaScript will normally stop and generate an error message, the technical term for this is: JavaScript will throw an exception (throw an error).

    The `try` statement allows you to define a block of code to be tested for errors while it is being executed...

    The `catch` statement catch the error that is happened in the `try` so you can do something with it.
2. throw

    If you use throw together with try and catch, you can generate custom error messages, so you can control the flow of your program and pretend there is an error.
    it basically treated as regular error inside the `try` statement, example: `throw 'awww error'`.
