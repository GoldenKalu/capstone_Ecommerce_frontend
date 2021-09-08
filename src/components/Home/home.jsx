import React from "react";
import "./home.css";
// import Products from "./products";
import "../Products/products";

// function Home() {
//   return (
//     <div className="home">
//       <div className="home__container">
//         <img
//           className="home__image"
//           src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
//           alt=""
//           src="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
//         />
      
//         <div className="home__row">
//           <products
//             id="12321341"
//             title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
//             price={11.96}
//             rating={5}
//             image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
//           />
//           <products
//             id="49538094"
//             title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
//             price={239.0}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
//           />
//         </div>

//         <div className="home__row">
//           <products
//             id="4903850"
//             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
//             price={199.99}
//             rating={3}
//             image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
//           />
//           <products
//             id="23445930"
//             title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
//             price={98.99}
//             rating={5}
//             image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
//           />
//           <products
//             id="3254354345"
//             title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
//             price={598.99}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
//           />
//         </div>

//         <div className="home__row">
//           <products
//             id="90829332"
//             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
//             price={1094.98}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
//           />
//         </div>
//       </div>
//       </div>
//   );
// }

function Home () {
    return (
        <div className="home">
            <div className="home_container">

            <div className="home-row">
                <products
                title="Air Athletic"
                price={19.82}
                rating={5}
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              />
              <products
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
              />

            </div>

            <div className="text-center ">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h2 id="text" className="text">Welcome to Noveau shop, your one stop shop for all your Running and hiking needs</h2>
              <h4 id="text" className="text">If you're a new customer we would like to say thank you for shopping with us. Feel free to contact us should you have any questions or concerns.
              We hope to see you again.</h4>
              <a type="button" className="btn btn-primary " href="/products" >View Products</a>
            </div>
            
                </div>
            </div>

        
               
        </div>
       

       </div>

        
  );
}
       
    
export default Home;