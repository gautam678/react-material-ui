import React, { Component } from "react";
import { Tabs, Paper, Tab } from "@material-ui/core";
class Footer extends Component {
  state = {
    index: 0
  };
  getCategory = () => {
    let index = this.props.muscles.getIndex(this.props.category);
    console.log(index);
  };
  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.index}
          onSelect={this.getCategory}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {this.props.muscles.map(group => (
            <Tab label={group} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}

export default Footer;
