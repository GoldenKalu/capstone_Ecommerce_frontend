import React from 'react';
import IndividualProduct from '../IndividualProducts/individualProducts';
import { useStateValue } from '../StateProvider';
import "./products.css"; 
import productImage from './productX.jpg'



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
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
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
            src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
            alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>
            <button onClick={IndividualProduct}>More info</button>


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
            <button onClick={IndividualProduct}>More info</button>


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
            <button onClick={IndividualProduct}>More info</button>

            {/* <button onClick={moreinfo}>Add to Basket</button> */}


            
            
                    {/* <Product
                    id='1111'
                    title='this is a test, lorem ipsum dolor sit amet'
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    price='60.00'
                    rating={5}
                    />

                    <Product
                    id='1111'
                    title='this is a test, lorem ipsum dolor sit amet'
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    price='60.00'
                    rating={5}
                    /> */}
    </div>

        

    
        
            
        
    );  
}

export default Product;
