import React from "react";
import "../Title/title.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import Products from "../Products/products"



function Title() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    // <div className="row row-spacer barcolor">
    //   <div className="col-align" style={{ padding: 0 }}>
        
        <div className="title_nav">
          {/* <link to="/"></link> */}
          <p>Nouveau shop</p>

        
          <input className="title_searchInput"
          type="text"
          placeholder="Search"
           />
          <Link to="/Products">
            <button>Search</button> 
            </Link>
          {/* <SearchIcon className="title_SearchIcon" /> */}

          <div className="title_nav">
            <Link to='/Login'>
            <div className="title_option">
            <span className="title_optionLineOne">New guest</span>
            <span className="title_optionLineTwo">login</span>
          </div>
            </Link>

         

          <div className="title_option">
            <span className="title_optionLine"> Orders</span>
            
          </div>

      <Link to="/checkout">
      <div className="title__optionBasket">
              <ShoppingBasketIcon />
              <span className="title_optionLineTwo title__basketCount">{basket?.length}</span>

            </div>
      </Link>
            
         
          
        </div>
      </div>
    
  );
}

export default Title;