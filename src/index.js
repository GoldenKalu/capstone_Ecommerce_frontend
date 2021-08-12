import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
import "bootstrap/dist/css/bootstrap.css"


// ReactDOM.render(<App/>, document.getElementById('root'));


// const jsxElement = <h1>Glamazon</h1>;
// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.getElementById('root'));

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);