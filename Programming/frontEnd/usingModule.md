1. using modules for static front-end/client-side Javascript must at least use localhost.
2. in the html script tag must use "module" as its type. example:

    ```html
    <script type="module" src="index.js"></script>
    ```
3. the syntax is:
    - for export:
      - `export default something;` this part is default mean it is a must have
      - `export {another, another, another};` for another ones
    - for import:
      - `import defaultSomething, {another, another, another} from ./module.js` for defaultSomething you can use your own naming different than the module but for anothers you have to follow the module naming.
