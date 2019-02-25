import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// Requires HTTPS!
// If you want to run offline and load faster, you can change this line:

serviceWorker.unregister();
