import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import NavBar from "./NavBar/navBar";
import Title from "./Title/title";
import Login from "./Login/login";
import Register from "./Register/register";
import "../components/app.css";
import StarRating from "./StarRating/star-rating";


export default function App() {
    return (
      <div className="App">
        <Title />
        <NavBar />
        <Switch>
          <Route path={ROUTES.LOGIN} exact component={Login} />
          <Route path={ROUTES.REGISTER} exact component={Register} />
          <Route path={ROUTES.StarRATINGS} component={StarRating} />
      </Switch>
      </div>
    );
    }