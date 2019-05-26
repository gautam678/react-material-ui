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
  getExerciseByMuscles = () => {
    let initialExercises = {};
    for (let i of muscles) {
      initialExercises[i] = [];
    }
    for (let i of this.state.exercises) {
      const { muscles } = i;
      initialExercises[muscles] = [...initialExercises[muscles], i];
    }

    return Object.entries(initialExercises);
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
  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));
  };
  handleExerciseSelectEdit = id => {
    this.setState(({ exercise }) => ({
      exercise: exercise.find(ex => ex.id === id),
      editMode: true
    }));
  };
  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));
  };
  render() {
    const exercises = this.getExerciseByMuscles(),
      { exercise, category, editMode } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          category={category}
          muscles={muscles}
          exercises={exercises}
          exercise={exercise}
          editMode={editMode}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
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
