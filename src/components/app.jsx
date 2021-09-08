import React, {useState, useEffect} from "react";
// import ROUTES from "../constants/routes";
// import axios from 'axios';
import jwt_decode from 'jwt-decode';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';

import NavBar from "./NavBar/navBar";
import Title from "./Title/title";
import Login from "./Login/login";
import Register from "./Register/register";
import Home from "./Home/home";
import Products from "./Products/products";
import "../components/app.css";
import axios from "axios";
import Checkout from "./Checkout";
import Payment from "./Payment";

// import React, { Component } from "react";
// import App from "./App";
// export default function App() {

const AppHooks = () => {

  let [user, setUser] = useState({});
    let [products, setProducts] = useState([]);

    const jwt = localStorage.getItem('token');
    console.log(jwt)
    let decoded = '';
    
   try{
       decoded = jwt_decode(jwt);
       console.log(decoded)
       
   } catch(ex) {
      console.log(ex); 
   } 
    
       
       
        const getUserData = async () => {
           await axios.get(`http://localhost:3001/api/collections/users/${decoded._id}`)
           .then((value) => {
            setUser(value.data)
           console.log(value.data)
           })
       }

       const getProducts = async () => {
           await axios.get(`http://localhost:3001/api/collections/products`)
           .then((value) => {
            setProducts(value.data)
            console.log(value.data, 'this is products')
           })
       }
       useEffect(() => {
          getUserData()
          getProducts()
          console.log(products,'this is use effect')
       }, [])

  

    
        return (
          <div className="App">
            <Title />
            <NavBar />
            <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/products" component={Products} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/payment">
                <Payment />
                {/* <h1> Payment route</h1> */}
                </Route>

                
    
              {/* <Route path="/StarRating" component={StarRating} /> */}
            </Switch>
          </div>
        );
    }
    

    


export default AppHooks
