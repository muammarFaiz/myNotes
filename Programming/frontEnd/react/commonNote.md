react common note:
1. to modify DOM with react we should use react and react-dom library/dependency.
2. react library include babel which will render JSX that react created from our JS file and turn it into plain Javascript that can be read for almost any browser. something like typescript compiler.
this allow us to type html elements inside js file.
3. the recommended way to style an html elements using react is using className.
4. you just can't return unwrapped html tags, you have to return into one div, etc. it doesn't matter if you return it from a function, another module or conditional ternary operator inside the html, you have to return it in one div, or something similar.
5. react class/func Components have `.defaultProps` that we can set with an object to set the default props if the props is not given.
6. react class/func Components have `.propTypes` that we can set with an object to dictate the type of the props, `.propTypes` require 'prop-types' library. example: `{name: PropTypes.string.isRequired}`
7. useEffect hook run only after the components function return something
