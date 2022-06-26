1. `export default something`

    can only be used for one variable/function/class and imported like this:

    `import something from './somewhere.js'` notice that by using export default you can name the imported data anything you like without using curly braces.
2. export without default

    can be used for many variable/function/class that you want to export.

    both export default or non default can be exported in the bottom line of your file/module.
    example: `export default something` or non default `export {someting, something2}`.

    non default export can be imported using curly braces, example: `import {something, something2} from './somewhere.js'` but the imported variable name cannot be different from the exported module.
3. `import * as something from...`

    mean that you imported all the exported file from a specific module an put in an object called `something`.
    this practice is discouraged because it can cause unecessary bloat.

that is for browser version, for node.js you need to change the file name into `.mjs` to use the above syntax, or use this instead:

1. `module.exports = someting;`
2. `const name = require('thefilepath');`
