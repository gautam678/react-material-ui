import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialog";
class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
              Exercise Database
            </Typography>
            <CreateDialog
              muscles={this.props.muscles}
              onCreate={this.props.onExerciseCreate}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
