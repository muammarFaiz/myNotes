## we sometimes need it but too seldom for me to remember it
### populate an objectId that is not nested is simple but when things get nested wwhich is happen quite often populating it is a bit annoying.
```js
const result = await carts.findOne({user: filter})
.populate('user', '-password -token -userid -__v')
.populate({
  path: 'userCart',
  populate: {
    path: 'product',
    select: '-__v',
    populate: {
      path: 'category tag',
      select: '-__v'
    }
  }
})
.select('-__v')
```