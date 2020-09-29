import React, { Component } from "react";
import "./mail.css";
import MailHeader from "./layout/MailHeader";

export class Mail extends Component {
  render() {
    return (
      <div className="mail-list">
        <MailHeader />
        <div className="mailing">
          <div className="mail-tabs">
            <div className="mail-primary">
              <i className="fab fa-xbox"></i>
              <p>Primary</p>
            </div>
            <div className="mail-social">
              <i className="fas fa-users"></i>
              <p>Social</p>
            </div>
            <div className="mail-promotion">
              <i className="fas fa-ad"></i>
              <p>Promotions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mail;
