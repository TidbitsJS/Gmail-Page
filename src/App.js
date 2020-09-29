import React from "react";
import "./App.css";
import Head from "./container/Header/Head";

import Option from "./container/Body/Options/Option";
import Mail from "./container/Body/Mails/Mail";

function App() {
  return (
    <div className="App">
      <Head />
      <div className="body">
        <Option />
        <Mail />
      </div>
    </div>
  );
}

export default App;
