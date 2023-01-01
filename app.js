/**
 *
 *
 */
import { createElement } from "react";
import ReactDOM from "react-dom/client"; // client is added in react 18 version

// React.creatElement => object => HMTL(DOM)
const heading = createElement("header", {
    id: 'head',
    key: 'header-section',
    className: 'test'
}, 'header section from parcel');
const body = createElement("section", {
    id: 'bodySection',
    key: 'body-section',
    className: 'content'
}, 'My content area');
const container = createElement("div", {
    id: 'container',
    key: 'container-section',
    className: 'container'
}, [heading, body]);

// JSX , contains html like syntax
/**
 * JSX => React.createElement => Object => HTML(DOM)
 * babel understand JSX file and pass into React.createElement
 * https://babeljs.io/
 *
 * @type {JSX.Element}
 */
const description = (
    <h1 id="desc">
        Hello
    </h1>
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(container);
