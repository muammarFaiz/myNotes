1. to avoid unwanted behavior which is the req.body undefined bug in server side, it is better to use this "request cofig" syntax for axios:
    ```js
    axios({
      url: '/something',
      method: 'post',
      headers: {
        something: something
      }
      params: {
        something: something
      }
      data: {
        a: something,
        b: something
      }
    });
    ```
2. axios to express

    - the params object inside the axios request config will be captured by express as req.query
    - the data object inside the axios request config only available for request methods 'PUT', 'POST', 'DELETE', and 'PATCH' and will be captured by express as req.body.
