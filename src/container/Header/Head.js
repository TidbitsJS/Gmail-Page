import React, { Component } from "react";
import "./head.css";

class Head extends Component {
  render() {
    return (
      <div className="mail-heading">
        <div className="mail-icons">
          <i className="fas fa-bars"></i>
          <i className="fab fa-mailchimp"></i>
          <h3>Gmail</h3>
        </div>
        <div className="mail-search">
          <div className="search-input">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search Email" />
            <i
              className="fas fa-angle-down"
              style={{ margin: " 0 0.5rem" }}
            ></i>
          </div>
        </div>
        <div className="mail-info">
          <i className="far fa-question-circle"></i>
          <i className="fas fa-cog"></i>
          <i className="fab fa-app-store-ios"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    );
  }
}

export default Head;
