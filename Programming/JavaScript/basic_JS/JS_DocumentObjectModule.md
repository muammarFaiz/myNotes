###DOM
1. the task of converting an HTML file into the DOM is done by the browser.
2. it turn the HTML into a tree structure that you can select and modify. the tree is usually how DOM represented.
3. `document.getElementsByTagName('h1')[0].innerHTML = 'be careful Rafii, and be disciplined'`
4. `document.querySelector('h1:nth-child(2)').classList.add('className');`
5. `document.querySelector('ul>li:nth-child(3)').setAttribute('id', 'pronsite')`
6. selecting elements:
    1. document.querySelector('h1');
    2. document.getElementsByTagName('h1')[0];
    3. document.getElementsByClassName('theClassName')[0];
    4. document.getElementById('theIdName');
    5. document.firstElementChild.children[1].children[0].children[0];
