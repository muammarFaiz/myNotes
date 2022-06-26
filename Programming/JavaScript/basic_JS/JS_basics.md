1. alert

    `alert('string or something else');`

    to show a notification that shows the string on the browser.
2. console.log

    `console.log('string or something else');`

    to print out a string of `'string or something else'` in the console.
3. prompt

    `prompt('write something');`

    show a text area for user to input a string with 'write something' as its banner/title.
4. typeof

    `typeof('a variable or something')`

    print out the type of something on the console.

5. falsy values
    - these values are presented as false:
      - `""` empty string.
      - `0` zero.
      - `null`
      - `undefined`
      - `NaN`
6. logical operator
    - `>` return true if left is greater than right, otherwise false.
    - `<` return true if left is lesser than right, otherwise false.
    - `==` return true if right and left are the same, otherwise false, ignore data type.
    - `===` the same as `==` but include data type.

    - 'and' operator

      `&&` look at its right and left value and return its false side over its true side,
      - or return its left side if both are falsy
      - or return its right side if both are true.
      - example:
      - `0 && 2==2` this will return `0` because `2==2` is true.

    - 'or' operator

      `||` is the same as `&&` but return its true side over falsy side,
      - or return its right side if both are falsy
      - or return its left side if both are true.
      - example:
      - `1>2 && 'macaroni'` this will return `macaroni` because the `1>2` is false/falsy value.

    - ternary operator `?` with `:` is an if statement, example:
      - `1 > 2 ? console.log('it is true') : console.log('it is false')`

        it can be used as a replacement for if statement which `?` regarded as `if` and `:` regarded as `else`.

    - nullish coalescing operator `??` check if its left value is `null` or `undefined` then return its right value, otherwise it return its left value.
      - example:
        `null ?? 'wowowo'` then it will return 'wowowo'.

7. `let`, `const`, `var`

    `const` to make your variable not allowed to be changed.
    `var`
    `let`
8. javascript object
    is a dictionary in python, object can also contain a function which you can define it inside the object or outside.
9. `NaN` = Not a Number
10. data dynamic javascript
