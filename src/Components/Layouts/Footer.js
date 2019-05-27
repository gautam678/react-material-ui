import React, { Component } from "react";
import { Tabs, AppBar, Tab } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
class Footer extends Component {
  render() {
    const index = this.props.category
      ? this.props.muscles.findIndex(group => group === this.props.category) + 1
      : 0;
    const indexChanged = (e, index) => {
      this.props.onSelect(index === 0 ? "" : this.props.muscles[index - 1]);
    };
    return (
      <AppBar position="static">
        <Tabs
          value={index}
          onChange={indexChanged}
          indicatorColor="secondary"
          textColor="secondary"
          centered={this.props.width !== "xs"}
          scrollable={this.props.width === "xs"}
        >
          <Tab label="All" />
          {this.props.muscles.map(group => (
            <Tab key={group} label={group} />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}

export default withWidth()(Footer);
