1. initializzzzzzing

    ```js
    const fs = require('fs');
    ```
2. copy a file

    ```js
    fs.copyFileSync('file1.txt', 'file2.txt');
    ```
    this code create file2.txt which is a copy of file1.txt.

    if the file2.txt is already exist then it will be overwritten.
