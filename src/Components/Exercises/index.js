import React, { Component, Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  },
  gridAlignment: {
    paddingLeft: 10
  },
  descriptionStyle: {
    marginTop: 10
  }
};

class Exercise extends Component {
  render() {
    return (
      <Grid container>
        <Grid item sm>
          <Paper style={styles.paper}>
            {this.props.exercises.map(([group, exercise]) => (
              <Fragment>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="nav">
                  {exercise.map(item => (
                    <ListItem button>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ))}
          </Paper>
        </Grid>
        <Grid style={styles.gridAlignment} item sm>
          <Paper style={styles.paper}>
            <Typography variant="h3"> Welcome!</Typography>
            <Typography variant="subtitle2" style={styles.descriptionStyle}>
              Description to the above task
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Exercise;
