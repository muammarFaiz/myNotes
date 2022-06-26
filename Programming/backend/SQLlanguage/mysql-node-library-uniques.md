1. the `sql` query string inside the object as the parameter for `connection.query()` for making request to the sql database:
    ```js
    connection.query(
      {sql: `DELETE FROM productsfaiz WHERE productName="${name}"`},
      (err, result, fields) => {
        if(err) {
          console.log(err);
          res.send(err);
        } else {
          console.log(result);
          res.send(result);
        }});
    ```
    the `sql` string must contain `""` the quotation mark around the name in condition `productName=`.
