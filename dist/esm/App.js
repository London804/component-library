import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { getGlobalStyleSheet } from './styles/globalStyle';
function App() {
    const styleSheet = getGlobalStyleSheet('light');
    const GlobalStyle = createGlobalStyle ` ${styleSheet}`;
    return (React.createElement("div", { className: "App" },
        React.createElement(GlobalStyle, null),
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
export default App;
//# sourceMappingURL=App.js.map