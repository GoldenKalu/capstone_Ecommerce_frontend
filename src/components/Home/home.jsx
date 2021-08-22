import React from "react";
import "./home.css";
// import NavBar from "../NavBar/navBar";

function Home (props) {
    return (

        <div className="text-center bg-image ">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h2 id="text" className="text">Welcome to Noveau shop, your one stop shop for all your Running and hiking needs</h2>
              <h4 id="text" className="text">If you're a new customer here is a 10% off code to say thank you for shopping with us. first-time10
              We hope to see you again.</h4>
              <a type="button" className="btn btn-primary " href="/products" >Products</a>
            </div>
          </div>
        </div>
      </div>
        






    // <div>Home</div>

    
    
    )
}

export default Home;