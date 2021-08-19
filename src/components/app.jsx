import React from "react";
import { Switch, Route } from "react-router-dom";
// import ROUTES from "../constants/routes";
import NavBar from "./NavBar/navBar";
import Title from "./Title/title";
import Login from "./Login/login";
import Register from "./Register/register";
import Home from "./Home/home";
// import Products from "./Pages/Products/products";
import "../components/app.css";
import StarRating from "../Pages/StarRating/star-rating";



export default function App() {
    return (
      <div className="App">
        <Title />
        <NavBar />
        <Switch>
         <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/products" component={Products} /> */}
          <Route path="/StarRating" component={StarRating} />
        </Switch>
      </div>
    );
  };
    