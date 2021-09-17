import React, {useState, useEffect} from "react";
// import ROUTES from "../constants/routes";
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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProfilePage from './profile/profilePage';
import PaymentSuccessful from "./PaymentSuccessful";
import IndividualProducts from "./IndividualProducts/individualProducts";


const promise = loadStripe('pk_test_51JYzMjLTAOH9KAabKnmhUVEUS4Jsp2OiIXp2lxBoJCcTgg4OrQQjwU3qrpjAnmoOcPCCxVu1HLYeqo5pFgRb5Izi00IwzQc0Op');

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
           await axios.get(`http://localhost:3005/api/collections/user/${decoded._id}`)
           .then((value) => {
            setUser(value.data)
           console.log(value.data)
           })
       }

       const getProducts = async () => {
           await axios.get(`http://localhost:3005/api/products`)
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
              <Route path="/profile" component={ProfilePage} />
              <Route path="/products" component={Products} />
              <Route path="/individualProducts" component={IndividualProducts} />

              <Route path="/checkout" component={Checkout} />
              <Route path="/payment">
              <Elements stripe={promise}>
              <Payment />
              </Elements>
                
                </Route>
                <Route path="/PaymentSuccessful" component={PaymentSuccessful} >
                  {Home}
                  </Route>


                
    
            </Switch>
          </div>
        );
    }
    

    


export default AppHooks
