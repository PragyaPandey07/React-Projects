import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// React.createElement => React Element - Object of React => HTML Element (on render)

const heading = React.createElement("h1", { id: "heading"}, "This is a React Element");

const Component = () =>{
    return(
        <h2 id="heading">
            This is JSX Heading
        </h2>
    );
} 

const HeadingComponent = () =>{
    //component composition
    return(
    <div id="heading">   
        <Component/> 
        This is React Functional Component
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);