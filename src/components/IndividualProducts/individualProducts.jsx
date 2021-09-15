import React, {useEffect, useState} from 'react';
import axios from 'axios'
import NavBar from '../NavBar/navBar'
import {BsFillStarFill} from "react-icons/bs"
import {BsStar} from "react-icons/bs"
import Products from "../Products/products"

// import Products from "./Products/products";
// import productImage from './productX.jpg'




export default function IndividualProduct({products, total,user}) {
    const usertext = useFormInput('');
    const userrating = useFormInput('');
    const usertitle = useFormInput('');

    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);
      
        const handleChange = e => {
          setValue(e.target.value);
        }
        return {
          value,
          onChange: handleChange
        }
      }
    

    const addToBasket = async(name_id) => { 
        console.log(name_id)
       const response = await axios.post(`http://localhost:3005/api/collections/cart/${user._id}/${name_id}`)
       console.log(response.data)
       alert("Item is in basket!")
       total = total + response.data.productsPrice
       console.log(total)

       
   }
   
    return (
        <>

    <div>
                    <Products
                    id='12345'
                    title='Nike mens'
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    price='60.00'
                    rating={3}
                    />
    </div>
            
        <div className="sp-container">
            <a href="/products">Back to Products.</a>
            <div className="sp-card">
                <div className="sp-container-fluid">
                    <div className="wrapper-row">
                        <div className="preview col-md-6">
                            <div className="preview-pic">
                            </div>
                            <div className="details ">
                                <h3 className="product-name">{products.productsName} - ${products.productsPrice}</h3>
                            
                            <div className="action">
                            <button onClick={addToBasket}>Add to Basket</button>

                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>


        </>
    )

}
