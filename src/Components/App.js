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
  handleExerciseSelect = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id)
    }));
  };
  handleExerciseCreate = exercise => {
    this.setState({
      exercises: [...exercises, exercise]
    });
  };
  render() {
    const exercises = this.getExerciseBymuscles(),
      { exercise, category } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
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
