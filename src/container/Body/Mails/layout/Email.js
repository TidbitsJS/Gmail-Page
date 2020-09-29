import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <div className="mail-email">
        <div className="email-info">
          <i className="far fa-square"></i>
          <i className="fas fa-star"></i>
          <p>Internshala</p>
        </div>
        <div className="email-content">
          <p>Sujata, 15 New Internships Matching Your Profile - Apply Today!</p>
        </div>
        <div className="email-time">
          <p>6:47 PM</p>
        </div>
      </div>
    );
  }
}

export default Email;
