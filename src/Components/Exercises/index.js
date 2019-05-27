import React, { Component, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import Form from "./Form";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: 5,
    height: `calc(100% - 20px)`,
    overflowY: "auto"
  },
  gridAlignment: {
    paddingLeft: 10
  },
  descriptionStyle: {
    marginTop: 10
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    },
    padding: 10
  }
});

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
      onSelectEdit,
      onDelete,
      classes
    } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.item}>
          <Paper className={classes.paper}>
            {exercises.map(([group, exercises]) =>
              !category || group === category ? (
                <Fragment key={group}>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                    color="secondary"
                  >
                    {group}
                  </Typography>
                  <List component="nav">
                    {exercises.map(({ id, title }) => (
                      <ListItem button key={id}>
                        <ListItemText
                          primary={title}
                          onClick={() => onSelect(id)}
                          color="secondary"
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            aria-label="Edit"
                            onClick={() => onSelectEdit(id)}
                            color="primary"
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            aria-label="Delete"
                            onClick={() => onDelete(id)}
                            color="primary"
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
        <Grid className={classes.item} item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom color="secondary">
              {title}
            </Typography>
            {editMode ? (
              <Form
                key={id}
                muscles={muscles}
                onSubmit={onEdit}
                exercise={exercise}
              />
            ) : (
              <Fragment>
                <Typography variant="subtitle2">{description}</Typography>
              </Fragment>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Exercises);
