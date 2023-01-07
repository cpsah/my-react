/**
 *
 *
 */
import React from "react";
import ReactDOM from "react-dom/client"; // client is added in react 18 version

// JSX , contains html like syntax
/**
 * JSX => React.createElement => Object => HTML(DOM)
 * babel understand JSX file and pass into React.createElement
 * JSX does sanitization - codes inside jsx are safe security prospective
 * https://babeljs.io/
 *
 * @type {JSX.Element}
 */
const description = (
    <h1 id="desc">
        I am a react element
    </h1>
);
const Heading = () => (
  <h1 id="desc">
    I am a header component (functional)
  </h1>
);
console.log(description);
// Component
// - Functional - NEW
// - class based component - OLd
/**
 * name of component starts with capital letters, a good practice.
 * Functional component is a normal function
 * @returns {string}
 * @constructor
 */
const HeaderComponent = () => {
  return (
    <div>
      { console.warn('hello buddy') }
      { Heading() }
      <Heading />
      { description }
      <h1>my first functional component</h1>
    </div>
  );
}

const HeaderComponent1 = () => (
  <div>
    <h1>my first functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
// asyn defer
root.render(<HeaderComponent />);
