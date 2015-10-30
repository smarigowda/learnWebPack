var React = require("react");
var App = require("./hotloadtest.jsx");

const app = document.createElement('div');
document.body.appendChild(app);
React.render(<App />, app);