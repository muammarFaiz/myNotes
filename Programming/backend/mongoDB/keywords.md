1. comparison query operation
    - `$gt`

        "greater than", example:

        `db.inventory.find( { quantity: { $gt: 20 } } )`
    - `$eq`

        "equal to", example:

        `{ <field>: { $eq: <value> } }`

        is not the same as: `{ <field>: <value> }` which look regex and string as the same,
        `$eq` will only return regex.
    - `$gte`

        "greater than or equal to", example:

        `{ field: { $gte: value } }`
    - `$in`

        "equals to any value in the specified array", example:

        `{ field: { $in: [<value1>, <value2>, ... <valueN> ] } }`
    - `$lt`

      `{ field: { $lt: value } }`

      selects the documents where the value of the `field` is less than (i.e. <) the specified value.
    - `$lte`

      `{ field: { $lte: value } }`

      $lte selects the documents where the value of the `field` is less than or equal to (i.e. <=) the specified value.
    - `$ne`

      `{ field: { $ne: value } }`

      $ne selects the documents where the value of the `field` is not equal to the specified value. This includes documents that do not contain the `field`.
    - `$nin`

      `{ field: { $nin: [ <value1>, <value2> ... <valueN> ] } }`

      selects the documents where:
      - the `field` value is not in the specified array or
      - the `field` does not exist.
2. `$all`

    The $all operator selects the documents where the value of a field is an array that contains all the specified elements. example:

    `{ <field>: { $all: [ <value1> , <value2> ... ] } }`

    If the field contains an array of documents, you can use the `$all` with the `$elemMatch` operator. example:

    ```

    { <field>: { $all: [

      { $elemMatch: { <query1>, <query2>, ... } } ,

      { $elemMatch: { <query1>, <query2>, ... } }

      ... ] } }

    ```
