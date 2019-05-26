import React, { Fragment, Component } from "react";
import Form from "./Form";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default class extends Component {
  state = {
    open: false
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
  render() {
    const { open } = this.state;
    const { muscles, onCreate } = this.props;
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
            <DialogContentText>Please fill out a form below.</DialogContentText>
            <Form muscles={muscles} onSubmit={onCreate} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
