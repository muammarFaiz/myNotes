## javascript class and javascript object is two different thing
1. simple example:
```js
class humanizer {
  constructor (pancakeCap, weight, height, age, name) {
    this.pancakeCap = pancakeCap;
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.name = name;
    this.selfdefined = 'default';
    console.log('constructor method run when the class assigned to a new object')
  }
  doRun () {
    console.log(`according to my understanding a class is a wrapper of multiple methods
      with only one special method that called constructor`)
  }
  static jump() {
    console.log('jump initiated')
    console.log(`${this.name} jump`)
  }
}
```
this is one of many way on how to set a new object using above class:

`var rudi = new humanizer(12, 75, 1.7, 30, 'Rudi')`

 if you run above code then the console will print out the `'constructor method run when the class assigned to a new object'` string and you can access rudi's pancakeCap, weight, height, age,
 and name by typing something like this `rudi.weight` and that code will return rudi's weight.

 static method on line 17 can be called without assigning the class to an object, example:

 `humanizer.jump()`

 but the static method cannot access the values that constructor method have such `this.name` and `this.selfdefined` if you do so then the value will return `undefined`.
