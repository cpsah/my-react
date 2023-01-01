/**
 *
 *
 */
import { createElement } from "react";
import ReactDOM from "react-dom/client"; // client is added in react 18 version

const heading = createElement("header", {
    id: 'head',
    key: 'header-section',
    class: 'test'
}, 'header section from parcel');
const body = createElement("section", {
    id: 'bodySection',
    key: 'body-section',
    class: 'content'
}, 'My content area');
const container = createElement("div", {
    id: 'container',
    key: 'container-section',
    class: 'container'
}, [heading, body]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(container);
