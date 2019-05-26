import React, { Component, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import Form from "./Form";
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
      muscles,
      category,
      exercises,
      onSelect,
      editMode,
      onEdit,
      exercise,
      exercise: {
        id,
        title = "Welcome",
        description = " Description to the above task"
      },
      onDelete
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
                        <ListItemSecondaryAction>
                          <IconButton
                            aria-label="Edit"
                            onClick={() => onEdit(id)}
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            aria-label="Delete"
                            onClick={() => onDelete(id)}
                          >
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
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
            {editMode ? (
              <Form muscles={muscles} onSubmit={onEdit} exercise={exercise} />
            ) : (
              <Fragment>
                <Typography variant="h3"> {title}</Typography>
                <Typography variant="subtitle2" style={styles.descriptionStyle}>
                  {description}
                </Typography>
              </Fragment>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Exercises;
