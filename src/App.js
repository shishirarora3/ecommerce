import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { simpleAction } from "./actions/simpleAction";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state
});
const Page = type => () => <div>This is {type}</div>;
class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    const { simpleReducer: { result}} = this.props;
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button onClick={this.simpleAction}>Topics</button>
              <div>{result}</div>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Page("Home")} />
          <Route path="/about" component={Page("about")} />
          <Route path="/topics" component={Page("topics")} />
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
