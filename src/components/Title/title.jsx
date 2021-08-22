import React from "react";
import "../Title/title.css";
import SearchIcon from '@material-ui/icons/Search';

function Title(props) {
  return (
    // <div className="row row-spacer barcolor">
    //   <div className="col-align" style={{ padding: 0 }}>
        <div className="title_nav">
          <p>Nouveau shop</p>

          <input className="title_searchInput"
          type="text" />
          <SearchIcon className="title_SearchIcon" />

          <div className="title_nav">

          <div className="title_option">
            <span className="title_optionLineOne">New guest</span>
            <span className="title_optionLineTwo">login</span>
          </div>

          <div className="title_option">
            <span className="title_optionLine"> Orders</span>
            
          </div>

          <div className="title_optionBasket">
            <shoppingBasketIcon />
            <span className="title_optionLineTwo title_basketCount">
              0
            </span>

          </div>
         
          
        </div>
      </div>
    
  );
}

export default Title;