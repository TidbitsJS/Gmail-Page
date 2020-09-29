import React, { Component } from "react";

class OptionList extends Component {
  render() {
    const data = this.props.data;
    return (
      <>
        <div className="head-list">
          <div className="head-list-icon">
            <i className={data.icon}></i>
          </div>
          <div className="head-list-name">{data.name}</div>
          <div className="head-list-value">
            {data.value === 0 ? null : data.value}
          </div>
        </div>
      </>
    );
  }
}

export default OptionList;
