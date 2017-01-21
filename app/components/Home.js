var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var MainContainer = require("../containers/MainContainer");

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Stumped</h1>
        <p className="lead">Welcome To Your Reading List</p>
      </MainContainer>
    );
  }
});

module.exports = Home;
