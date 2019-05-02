import React, { Fragment, Component } from "react";

import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  withStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  formControl: {
    width: 500
  }
});
export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };
    handleClose = () => {
      this.setState({
        open: false
      });
    };
    handleChange = name => event => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: event.target.value
        }
      });
    };
    handleSubmit = () => {
      //TODO validation
      const { exercise } = this.state;
      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLowerCase().replace(/ /g, "-")
      });
      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };
    render() {
      const { open } = this.state;
      const { classes } = this.props;
      return (
        <Fragment>
          <Fab size="small" aria-label="Add" onClick={this.handleToggle}>
            <AddIcon />
          </Fab>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle id="form-dialog-title">
              Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out a form below.
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={this.state.exercise.title}
                  onChange={this.handleChange("title")}
                  margin="normal"
                  className={classes.formControl}
                />
                <br />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="muscles">Muscles</InputLabel>
                  <Select
                    value={this.state.exercise.muscles}
                    onChange={this.handleChange("muscles")}
                  >
                    {this.props.muscles.map(item => (
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
                  value={this.state.exercise.description}
                  onChange={this.handleChange("description")}
                  margin="normal"
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
