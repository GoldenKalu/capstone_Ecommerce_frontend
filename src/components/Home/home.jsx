import React from "react";
import "./home.css";
// import Products from "./products";
// import "../Products/products";
import Products from "../Products/products"


function Home () {
    return (
     

            <div className="text-center ">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h2 id="text" className="text">Welcome to Noveau shop, your one stop shop for all your Running and hiking footwear</h2>
              <h4 id="text" className="text">If you're a new customer we would like to say thank you for shopping with us. Feel free to contact us should you have any questions or concerns.
              We hope to see you again.</h4>
              <a type="button" className="btn btn-primary " href="/products" >View Products</a>

              <div className="home__row">
              <Products
                    id='12345'
                    title='Nike mens'
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    price='60.00'
                    rating={3}
                    />

                    <Products
                    id='1234'
                    title='Nike walker'
                    image="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    price='60.00'
                    rating={2}
                    />

              </div>
              
                    
        
            </div>
            
                </div>
            </div>

        

        
  );
}
       
    
export default Home;