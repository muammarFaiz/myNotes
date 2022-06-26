## JavaScript object and JavaScript class is two different thing
1. example JavaScript object:
    ```js
    const test = {
        main: 'haha',
        main2: 'haha2',
        testmethod () {
            console.log(this);
        },
        testmethod2 () {
            console.log(`method2 ${this}`);
        },
        stringfunc () {
            return 'hehe';
        },
    };
    ```
    JavaScript object is very similar with python dictionary, it can contain almost anything inside it: string, boolean, number, function, nested function.
    callling example:
    - `test.main` will return the string 'haha'
    - `test.testmethod` will return the function testmethod, un-activated
    - `test.testmethod()` will run the function testmethod that defined inside the test objects, and the console will print out the `this` which is the `test` it self.
