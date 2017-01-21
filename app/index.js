var React = require("react");
var ReactDom = require("react-dom");
var routes = require("./config/routes");

var HelloWorld = React.createClass({
  render: function() {
    return <div> Hello World </div>;
  }
});

ReactDom.render(routes, document.getElementById("app"));
