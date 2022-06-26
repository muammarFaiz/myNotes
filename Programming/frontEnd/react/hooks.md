1. useState

    setstate in useState hook only re-render if it have a value to set on its state.

    ```js
    const [thevariable, setThevariableFunction] = React.useState('initial value');
    // to change thevariable value use:
    setThevariableFunction('new value');
    // remember that a list/object need a deep copy before using it as the new value.
    ```
2. useEffect

    it run initially when the component mount, regardless of its dependency.
    - order

    the order of useEffects doesn't matter if there is only one useEffect that re-render the component, regardless useEffect with dependency seems to run first and then useEffect without dependency and lastly useEffect with only square bracket dependency.
    you can set the useEffects activation order by using dependencies (when the useEffect will run beside on initial mount/browser restart). that is the only way i know...
    - requirement

    it only able to start when the screen refresh, it can start everytime the screen refresh or at the specified refresh using its dependency.

    ```js
    React.useEffect(() => {
      // everytime the dependencies value change the useEffect run this callback.
      console.log('this is the callback');
      return () => {
        // this return callback will run first before the main callback every time the useEffect run for the second time and so on. it won't run on the first time.
      }
    }, ['the dependencies'])
    // the dependencies must be inside an array
    ```
