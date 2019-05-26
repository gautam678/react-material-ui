import React, { Component } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
  Button
} from "@material-ui/core";

const styles = theme => ({
  formControl: {
    width: 300
  }
});
export default withStyles(styles)(
  class extends Component {
    state = this.getInitialState();

    getInitialState() {
      const { exercise } = this.props;
      return exercise
        ? exercise
        : {
            title: "",
            description: "",
            muscles: ""
          };
    }
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };
    handleSubmit = () => {
      //TODO validation
      const { exercise } = this.state;
      this.props.onSubmit({
        ...exercise,
        id: exercise.title.toLowerCase().replace(/ /g, "-")
      });
      this.setState(this.getInitialState());
    };
    render() {
      const { title, description, muscles } = this.state;
      const { classes, exercise, muscles: categories } = this.props;
      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.formControl}
          />
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            className={classes.formControl}
            multiline
            rows="4"
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            Create
          </Button>
        </form>
      );
    }
  }
);
