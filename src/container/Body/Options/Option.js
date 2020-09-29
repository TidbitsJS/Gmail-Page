import React, { Component } from "react";
import "./option.css";
import Compose from "./components/Compose";
import OptionList from "./components/OptionList";
import { data1, data2 } from "./Data/Static";

export class Option extends Component {
  render() {
    return (
      <div className="mail-options">
        <div className="option-head">
          <Compose />
          <div className="option-list-div">
            {data1.map((item, index) => (
              <OptionList data={item} key={index + item.name} />
            ))}
          </div>
          <div className="option-list-meet">
            <p style={{ margin: "0.7rem" }}>Meet</p>

            {data2.map((item, index) => (
              <OptionList data={item} key={index + item.name} />
            ))}
          </div>
          <p style={{ margin: "0.7rem" }}>Hangouts</p>
          <div className="option-hangout">
            <div className="option-hangout-user">
              <i
                className="fas fa-user"
                style={{ marginRight: 10, color: "cadetblue" }}
              ></i>
              <p>Tidbits</p>
              <i className="fas fa-caret-down" style={{ marginLeft: 40 }}></i>
            </div>
            <div>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="option-bottom">
          <i class="fas fa-user"></i>
          <i class="fab fa-meetup"></i>
        </div>
      </div>
    );
  }
}

export default Option;
