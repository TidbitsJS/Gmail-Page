import React, { Component } from "react";
import "./option.css";
import Compose from "./components/Compose";
import OptionList from "./components/OptionList";

export class Option extends Component {
  render() {
    return (
      <div className="mail-options">
        <div className="option-head">
          <Compose />
          <OptionList />
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
