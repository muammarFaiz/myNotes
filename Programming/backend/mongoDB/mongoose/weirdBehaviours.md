1. model.find() from mongoose return the object inside a list, while model.findOne() does not,
therefore the object returned from findOne can use .save() for updating a document with mongoose
validations.
2. to use validators in updating use .findOne() and .save()

    or use .update() or .findOneAndUpdate() with the runValidators option.
3. this is how to show de collections information such as collection names and type:
    ```js
    let test = await mongoose.connection.db.listCollections().toArray();
    console.log(test);
    ```
4. it is either from express or ejs that we should put the external css inside the css folder,
inside the specified folder,
such:
    ```js
    app.use(express.static(__dirname + '/public'));
    ```
    so the css file location will be: `root/public/css/main.css`
