# dropdown open close by click
1. to close the dropdown by clicking outside the react/html dropdown element/button is not as simple as i expected, it took me around two days to figure out a way to make it work:
   - first wrap the page with onClick, so the app can detect clicks anywhere on the page.

      ```html
      <div onClick={detectClick}>
        the page...
      </div>
      ```
   - add ref to the dropdown button/div and save the element (the dropdown button) received from the ref to useRef so we can compare it when detectClick running using the `contains()` function so when it return true then it mean the user clicked the button.
   
      ```html
      <div ref={ref => {dropdownButton.current = ref}}>
      ```
      ```js
      const dropdownButton = useRef(null)

      const detectClick = val => {
         if(dropdownButton.current.contains(val.target)) {
            // the dropdown button is clicked
         } else {
            // user clicked somewhere else
         }
      }
      ```