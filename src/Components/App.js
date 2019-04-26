import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercises";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercise />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
