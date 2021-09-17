import React, {useEffect, useState} from 'react';
import axios from 'axios'
import NavBar from '../NavBar/navBar'
import Products from "../Products/products"
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './individualProducts.css';

function IndividualProducts (props) {
    return <><h1>Individual products</h1><div>
        <Products
            id='12345'
            title='Nike mens'
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            price='60.00'
            rating={3} />
    </div></>
}
// function IndividualProducts({ id, title, image, price, rating}) {
//     const [{ basket }, dispatch] = useStateValue();


//     const addToBasket = () => {

//         dispatch({
//             type: 'ADD_TO_BASKET',
//             item: {
//                 id: id,
//                 title: title,
//                 image: image,
//                 price: price,
//                 rating: rating,
//             },
            
//         });

//         return (
//             <>
    
        // <div>
        //                 <Products
        //                 id='12345'
        //                 title='Nike mens'
        //                 image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        //                 price='60.00'
        //                 rating={3}
        //                 />
        // </div>
                
//             <div className="sp-container">
//                 <a href="/products">Back to Products.</a>
//                 <Link to="/products"></Link>
//                 <div className="sp-card">
//                     <div className="sp-container-fluid">
//                         <div className="wrapper-row">
//                             <div className="preview col-md-6">
//                                 <div className="preview-pic">
//                                 </div>
//                                 <div className="details ">
//                                     <h3 className="product-name">{Products.productsName} - ${Products.productsPrice}</h3>
                                
//                                 <div className="action">
//                                 <button onClick={addToBasket}>Add to Basket</button>
    
//                                 </div>
    
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>  
//             </div>
    
    
//             </>
//         )
    
//     }
    
//     }
   
export default IndividualProducts;