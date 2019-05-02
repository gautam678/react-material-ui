import React, { Component } from "react";
import { Tabs, Paper, Tab } from "@material-ui/core";
class Footer extends Component {
  render() {
    const index = this.props.category
      ? this.props.muscles.findIndex(group => group === this.props.category) + 1
      : 0;
    const indexChanged = (e, index) => {
      this.props.onSelect(index === 0 ? "" : this.props.muscles[index - 1]);
    };
    return (
      <Paper>
        <Tabs
          value={index}
          onChange={indexChanged}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {this.props.muscles.map(group => (
            <Tab key={group} label={group} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}

export default Footer;
