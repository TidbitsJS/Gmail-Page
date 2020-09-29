import React, { Component } from "react";
import "./mail.css";
import MailHeader from "./layout/MailHeader";

export class Mail extends Component {
  render() {
    return (
      <div className="mail-list">
        <MailHeader />
      </div>
    );
  }
}

export default Mail;
