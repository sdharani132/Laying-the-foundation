import React from "react";
import ReactDOM from "react-dom/client";
import { obj, func, temp } from "./helper";

const heading1 = (
<h2 id="head1" key="heading1"> 
    This is heading1 from JSX 
</h2>);

const Heading2 = function() {
    return (
        <h2>This is heading2 from JSX</h2>
    );
}

/** 
 * This is a normal way of writing the JSX code or the react code where we create children and then put all those children in one parent which we put it in the root.
 
const Container = () => (
    <div id="container">
        {heading1}
        {Heading2()}
        <Heading2 />
    </div>
);

*/


/** 
 * When having multiple children then we were supposed to create one more div that we were putting it in the root till now. But now we can take the help of arrays and put element in array.
 
const App = () => {
    return (
      [<p key="first">This is first JSX Element!</p>,<p key="second">This is another JSX Element</p>]
    );
  };

*/

// Using fragments which does the same job as above in the arrays. New feature from 16.2 version.
// So fragments binds everything into one by eliminating the need for extra div to be created.
const shouldShow = "";
const App = () => {
    return (
      <React.Fragment>
        <p>This is first JSX Element!</p>
        <p>This is another JSX Element</p>
        <p>{shouldShow && "Shown"}</p> 
        {/* The above one acts as short circuit. i.e: when shouldshow has value shown is displayed and if empty then it is not*/}
        {heading1}
        {<Heading2></Heading2>}
      </React.Fragment>
    );
  };

/**
 * Here you can call a functional component by doing <Heading2 /> or <Heading2></Heading2>.
 * But doing the same thing when wrapped inside the {} also gives us the same result.
 * So what does that mean?
 * It means JS recognises it.
 * and thats why you were able to do this outisde const res = <App />;
 */

const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(<Container />);
const res = <App />;
console.log(res);
obj.id = 2;
console.log(obj);
root.render(res);
console.log(func());
temp = 5;
console.log(temp); // Doesn't get modified because of the below reason.
/**
 * The imported values are read-only views of the features that were exported. Similar to const variables, you cannot re-assign the variable that was imported, but you can still modify properties of object values. The value can only be re-assigned by the module exporting it. See the import reference for an example.
 */