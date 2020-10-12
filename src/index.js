import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components";

import * as theme from '#elements/theme'
import App from './App.js'

var mountNode = document.getElementById("app");
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , mountNode);