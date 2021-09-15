import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad"
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt=""
            />
            <div>
                {/* <h3>Hello, {user?.email}</h3> */}
                <h2 className="checkout__title">Your shopping Basket</h2>

                
                    {/* <CheckoutProduct
                    id='1111'
                    title='this is a test, lorem ipsum dolor sit amet'
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    price='60.00'
                    rating={5}
                    />

                    <CheckoutProduct
                    id='1111'
                    title='this is a test, lorem ipsum dolor sit amet'
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    price='60.00'
                    rating={5}
                    /> */}

                 {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />


                ))}
               

            </div>
        </div>
        
        <div className="checkout__right">
            <Subtotal />

            
        </div>
        
    </div>
    );
    
    
}

export default Checkout;
