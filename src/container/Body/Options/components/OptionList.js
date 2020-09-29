import React, { Component } from "react";
import data from "../Data/Static";

class OptionList extends Component {
  render() {
    console.log(data);
    return (
      <>
        {data.map((item, index) => (
          <div className="head-list" key={index + item.name}>
            <div className="head-list-icon">
              <i className={item.icon}></i>
            </div>
            <div className="head-list-name">{item.name}</div>
            <div className="head-list-value">{item.value}</div>
          </div>
        ))}
      </>
    );
  }
}

export default OptionList;
