import React, { Component } from "react";
import emails from "../Database/EData";

class Email extends Component {
  render() {
    return (
      <>
        {emails.map((item, index) => (
          <div className="mail-email">
            <div className="email-info">
              <i className="far fa-square"></i>
              <i className="fas fa-star"></i>
              <p>{item.name}</p>
            </div>
            <div className="email-content">
              <p>{item.content}</p>
            </div>
            <div className="email-time">
              <p>{item.time}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Email;
