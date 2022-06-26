this procedure of managing jwt by saving the token in database when user logged in and delete the token when user is logged out.
```js
router.get('/logout', async (req, res) => {
  console.log('logout running...');
  const token = req.headers.authorization.split(' ')[1]
  // server expect the token will be a string of null if no token found...
  if(token !== 'null') {
    const user = await userModel.findOne({jwt_token: token})
    if(user) {
      const tokenIndex = user.jwt_token.indexOf(token)
      // removing the jwt from user jwt array
      user.jwt_token.splice(tokenIndex, 1)
      const result = await user.save()
      c(result)
    } else {
      c('database does not have that token...')
    }
    res.send('token deleted')
  } else {
    c('token null')
    res.send('token null')
  }
})
```