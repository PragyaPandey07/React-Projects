const heading = React.createElement("h1", { id: "heading"}, "Hello World from React!!");
/*React.createElement() takes 3 parameters
@param1 - Element you want to create
@param2 - Object to provide attributes to the element
@param3 - inner html (content) inside the element
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", { id: "parent"},
[heading,
    React.createElement("div", { id : "child"},
        [React.createElement("h1", {}, "I am a H1 element"),
        React.createElement("h2", {}, "I am a H2 element")]
    )
]
);

root.render(parent);