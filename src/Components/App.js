import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";
class App extends Component {
  state = {
    exercises,
    exercise: {}
  };
  handleCategory = category => {
    this.setState({
      category
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
  handleExerciseSelected = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id)
    }));
  };
  render() {
    const exercises = this.getExerciseBymuscles(),
      { exercise, category } = this.state;
    return (
      <Fragment>
        <Header />
        <Exercises
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
          exercise={exercise}
        />
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
