const heading = React.createElement("header", {
    id: 'head',
    class: 'test'
}, 'header section');
const body = React.createElement("section", {
    id: 'bodySection',
    class: 'content'
}, 'My content area');
const container = React.createElement("div", {
    id: 'container',
    class: 'container'
}, [heading, body]);
    
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(container);