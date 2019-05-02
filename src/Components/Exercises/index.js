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

class Exercises extends Component {
  render() {
    const {
      category,
      exercises,
      onSelect,
      exercise: {
        id,
        title = "Welcome",
        description = " Description to the above task"
      }
    } = this.props;
    return (
      <Grid container>
        <Grid item sm>
          <Paper style={styles.paper}>
            {exercises.map(([group, exercises]) =>
              !category || group === category ? (
                <Fragment key={group}>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="nav">
                    {exercises.map(({ id, title }) => (
                      <ListItem button key={id}>
                        <ListItemText
                          primary={title}
                          onClick={() => onSelect(id)}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
            )}
          </Paper>
        </Grid>
        <Grid style={styles.gridAlignment} item sm>
          <Paper style={styles.paper}>
            <Typography variant="h3"> {title}</Typography>
            <Typography variant="subtitle2" style={styles.descriptionStyle}>
              {description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Exercises;
