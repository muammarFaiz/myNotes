1. slice
    ```js
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // expected output: Array ["camel", "duck"]
    ```
    ```
    Syntax:

    slice()
    slice(start)
    slice(start, end)
    ```
2. push
    it append an array

2. includes

    The includes method is used to determine whether an array contains a specified item. This method returns true if the element exists in the array, and false if not. The includes() method is perfect for finding whether the element exists or not as a simple boolean value.
    ```js
    const fruits = ['🍎', '🍋', '🍊', '🍇', '🍍', '🍐'];

    fruits.includes('🍇');  // true
    fruits.includes('🍉');  // false
    ```

3. indexOf

    The simplest and fastest way to check if an item is present in an array is by using the Array.indexOf() method. This method searches the array for the given item and returns its index. If no item is found, it returns -1.
    ```js
    const fruits = ['🍎', '🍋', '🍊', '🍇', '🍍', '🍐'];

    fruits.indexOf('🍋'); // 1  (true)
    fruits.indexOf('🍍'); // 4  (true)
    fruits.indexOf('🍌'); // -1 (false)
    ```
4. find

    Unlike includes(), the find() method executes the specified function for each element present in the array. It returns `the value` of the first element in an array that passes a certain condition:
    ```js
    const fruits = ['🍎', '🍋', '🍊', '🍇', '🍍', '🍐'];

    const value = fruits.find(elem => elem === '🍍');
    console.log(value); // 🍍

    const value = fruits.find(elem => elem === '🍉');
    console.log(value); // undefined

    var test = [33, 44, 55, 66, 77, 88, 99]

    test.find(num => num/4 === 11) // 44
    test.find(num => num > 90) // 99
    ```
5. map
    return an array of an items that has or has not been edited inside its callback.
    ```js
    const mud = [100, 73, 49, 65, 89, 602];
    const suuuuuu = mud.map(item => {
      return item + 'X';
    });
    // suuuuuu = [ '100X', '73X', '49X', '65X', '89X', '602X' ]
    ```
6. splice
    ```js
    const array = [2, 5, 9];

    console.log(array);

    const index = array.indexOf(5);
    if (index > -1) {
      array.splice(index, 1); // 2nd parameter means remove one item only
    }

    // array = [2, 9]
    console.log(array);
    ```
7. filter
    return an array of items that fulfil the condition described in the callback function.
    ```js
    const suuuuuu = mud.filter(item => {
      return item > 90;
    });
    // suuuuuu = [ 100, 602 ]
    ```
8. find
    return the first items in an array that fulfil the condition described in the callback function.
    ```js
    const suuuuuu = mud.find(item => {
      return item > 90;
    });
    // suuuuuu = 100
    ```
9. some
    return true if there is at least one item in the array that fulfil the condition described in the callback function.
    ```js
    const suuuuuu = mud.some(item => {
      return item > 90;
    });
    // suuuuuu = true
    ```
10. every
    return true if only every single items in the array fulfil the condition rescribed in the callback function.
    ```js
    const suuuuuu = mud.every(item => {
      return item > 90;
    });
    // suuuuuu = false
    ```
11. reduce
    return a combined result of every single items in the array.
    ```js
    const suuuuuu = mud.reduce((currentTotal, item) => {
      return item + currentTotal;
    });
    // suuuuuu = 978
    ```
    in the very first loop, `currentTotal` equal to the first item in the array, and `item` equal to the second item in the array.
12. 
