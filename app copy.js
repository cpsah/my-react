/**
    Header
      - logo
      - nav items (right side)
      - cart
    Body
      - search bar
      - restaturant list
        - restaurant cards (many cards)
          - image
          - name
          - rating
          - cuisine        
    Footer
      - links
      - copyright
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
// This is an element. starts with all small caps
const description = (
    <h1 id="desc">
        I am a react element
    </h1>
);
// functional component, starts with capital letter
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
const HeaderComponentTest = () => {
  return (
    <div>
      { console.warn('hello buddy') }
      { Heading() }
      <Heading />
      <Heading></Heading>
      { description }
      {
        // Witting comment in JS
        /**
         *         multi line comment 
         * JSX/javascript/ES6 is not mandatory
         * <Heading /> => self closing tag
         */
        
      }
      <h1>my first functional component</h1>
    </div>
  );
}

const HeaderComponent1 = () => (
  <div>
    <h1>my first functional component</h1>
  </div>
);

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food Villa"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>      
    </div>
  );
}
const Body = () => {
  return (
    <h4>Body</h4>
  );
}
const Footer = () => {
  return (
    <h4>Footer</h4>
  );
}
// React.Fragment => it is like an empty tag
// JSX - only one parent
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
// asyn defer
root.render(<AppLayout />);
