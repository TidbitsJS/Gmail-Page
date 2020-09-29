import React, { Component } from "react";

export class MailHeader extends Component {
  render() {
    return (
      <div className="mail-head">
        <div className="mail-head-start">
          <div>
            <i className="far fa-square" style={{ marginLeft: "1rem" }}></i>
            <i
              className="fas fa-angle-down"
              style={{ margin: " 0 0.5rem" }}
            ></i>
          </div>
          <i className="fas fa-redo-alt" style={{ margin: " 0 1rem" }}></i>
          <i className="fas fa-ellipsis-v" style={{ margin: " 0 1rem" }}></i>
        </div>
        <div className="mail-head-end">
          <button>1-50 of 3456</button>
          <i className="fas fa-angle-left" style={{ margin: " 0 1rem" }}></i>
          <i className="fas fa-angle-right" style={{ margin: " 0 1rem" }}></i>
          <div>
            <i className="fas fa-keyboard" style={{ marginLeft: " 1rem" }}></i>
            <i
              className="fas fa-angle-down"
              style={{ margin: " 0 0.5rem" }}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default MailHeader;
