import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercises";
import { muscles, exercises } from "../store";
class App extends Component {
  state = {
    exercises,
    category: ""
  };
  handleCategory = () => {
    this.setState({
      category: category
    });
  };
  getExerciseBymuscles = () => {
    let exerciseByParts = {};
    for (let i of this.state.exercises) {
      const { muscles } = i;
      exerciseByParts[muscles] = exerciseByParts[muscles]
        ? [...exerciseByParts[muscles], i]
        : [i];
    }
    return Object.entries(exerciseByParts);
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Exercise exercises={this.getExerciseBymuscles()} />
        <Footer
          muscles={muscles}
          onSelect={this.handleCategory}
          category={category}
        />
      </Fragment>
    );
  }
}

export default App;
