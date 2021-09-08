import React from 'react';
import { useStateValue } from '../StateProvider';
import "./products.css";



function Product({ id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("basket content >>>", basket);

    const addToBasket = () => {

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    }
    return (
        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    <div className="product">
        <div className="product__info">
            <p>Mens Nike dowhshifter</p>
            <p className="product__price">
                <small>$</small>
                <strong>50.00</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟🌟</p>
                ))}
                
            </div>
        </div>

            <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>

            <div className="product__info">
            <p>Mens Nike dowhshifter</p>
            <p className="product__price">
                <small>$</small>
                <strong>60.00</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟🌟🌟</p>
                ))}
                
            </div>
        </div>

            <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>

            <div className="product__info">
            <p>Mens Nike dowhshifter</p>
            <p className="product__price">
                <small>$</small>
                <strong>45.00</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟🌟🌟</p>
                ))}
                
            </div>
        </div>

            <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>

            
            
{/* 
            <p>Nike mens downshifter</p>
            <p className="product_price">
                <small>$</small>
                <strong>70.00</strong>
            </p>
            <div className="product_rating">
                <p>🌟</p>


            
            </div>
            <img
            src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
            />
            <button>Add to Basket</button>

            <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt=""
            />
            <button>Add to Basket</button>

            <p>Nike mens downshifter</p>
            <p className="product_price">
                <small>$</small>
                <strong>70.00</strong>
            </p> */}

            
    </div>

        

    
        
            
        
    );  
}

export default Product;
