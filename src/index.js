import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";


// Use createRoot to render the app
const rootElement = ReactDOM.createRoot(
    document.getElementById('root')
);
rootElement.render(<App />)

