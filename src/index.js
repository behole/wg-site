"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var RetroDashboard_1 = require("./components/RetroDashboard");
require("./styles/globals.css");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <RetroDashboard_1.default />
  </react_1.default.StrictMode>);
