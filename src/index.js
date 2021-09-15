import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
import "bootstrap/dist/css/bootstrap.css"
import reducer, {initialState} from './components/reducer';
// import reducer from './components/reducer';
import { StateProvider } from "./components/StateProvider";



ReactDOM.render(
    <Router>
        <React.StrictMode>
            <StateProvider initialState={initialState} reducer={reducer}>
            <App/>
            </StateProvider>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);