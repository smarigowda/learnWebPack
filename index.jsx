var React = require("react");
var ReactDom = require('react-dom');
var App = require("./hotloadtest.jsx");

const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />, app);