1. BrowserRouter

    a component, is the most outer of your react app (the cover).
2. Router

    a component, is the container of Route, so you can choose which route to show instead of showing all of them at once, example:
    ```html
    <BrowserRouter>
      <Routes>
        <Route ... />
        <Route ... />
        <Route ... />
      </Routes>
    </BrowserRouter>
    ```
3. Route

    a component, to define url for your component, example:
    ```html
    <Route path="/expenses" element={<Expenses />} />
    ```
4. Navigate

    a component, that usually placed inside the element output of a Route element to replace/redirect current url to the url you wish.
5. Outlet

    a component, usually inside a parent component which  will be replaced with its child component, so it is used to define where your child component will render.

    but if you use nested route (using the Routes and Route combo inside the parent components so it won't build up inside your index.jsx reactdom.render) the Outlet is not needed.
6. useNavigate

    a function that can be used to automatically navigate/redirect, usually when user is loging in, etc, usually can be used with useEffect hook etc. Example to redirect:
    ```js
    const navigate = useNavigate();

    React.useEffect(() => {
      ...something
      navigate('/welcome', {replace: true});
      ...something
    }, [something])
    ```
    example to forward or backward navigation:
    ```js
    // backward navigation one time
    Navigate(-1);
    // backward navigation three times
    Navigate(-3);
    // forward navigation two time
    navigate(2);
    ```
7. relative route

    writing route for a nested route is relative to its parent route, you must not use the `/` in the front of the route that refer to the index/home route therefore you will go outside of its parent route. Example:
    ```html
    <!-- inside the parent route named: title -->
    <Link to='abstracts/trees'>Trees</Link><br />
    <!-- the link will go to /title/abstracts/trees -->
    <Routes>
      <Route path='abstracts/:title' element={<Abstracts />} />
      <!-- just like the link above -->
    </Routes>
    <Link to='/abstracts/trees'>Trees</Link><br />
    <!-- the above link have / in the front which refer to the index/home route, then the link will go to /abstracts/threes instead of /title/abstracts/trees -->
    ```
