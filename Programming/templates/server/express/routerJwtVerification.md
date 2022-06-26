this router is usualy used at the beginning when the user visit the website, to check if the user is already loged in or not

```js
router.get('/verifytoken', async (req, res) => {
c('verification running')
  const chooseRes = async (reqx, resx) => {
    const authorization = reqx.headers.authorization
    c(authorization)
    if(!authorization) {
      c('no authorization header')
      return resx.send('rejected')
    }
    token = authorization.split(' ')[1]
    if(!token) {
      c('token is a falsy value')
      return resx.send('rejected')
    }
    // i find the user before verifying the jwt because there is a chance a user send a token that is already
    // logged out/deleted from the database
    const user = await userModel.findOne({jwt_token: token})
    c(user)
    if(!user) {
      c('no user with that token')
      return resx.send('rejected')
    }
    try {
      tokenStatus = jwt.verify(token, process.env.JWT_SECRET)
      c('user found, token accepted')
      return resx.send('ok')
    } catch (error) {
      c('user found, token rejected')
      return resx.send('rejected')
    }
  }
  chooseRes(req, res)
})
```