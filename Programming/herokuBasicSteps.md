1. commit the website into git
2. make sure you have heroku cli, `heroku --version`
3. "add heroku git remote" `heroku create`
4. add a Procfile `ni Procfile` then the code inside Procfile is usually: `web: node app.js`
5. "listen on the correct port"
    ```js
    let port = process.env.PORT;
    if (port == null || port == "") {
      port = 8000;
    }
    app.listen(port);
    ```
6. add description in package.json of your node version, example:
    ```json
    "engines": {
      "node": "16.13.2"
    }
    ```
7. DONT FORGET, to commit once again and finally `git push heroku master`
