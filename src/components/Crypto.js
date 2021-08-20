import React from "react";
import { Link } from "react-router-dom";

// we destructen de prop omdat we er toch maar 1 hebben
const Crypto = ({crypto, verwijderCrypto}) => {
    return (
        //<Link to="/asset/{crypto.id}">
        <Link to={`/asset/${crypto.id}`}>
            <center>
            <br />
            <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between
             align-items-center text-dark coin">
                 <img className="coinlist-image" src={crypto.image} ></img>
                 <span className="text-decoration-none">Price: € {crypto.current_price}</span>
                 <span className={crypto.price_change_percentage_24h < 0 ? "text-danger mr-2" : "text-success mr-2"}>
                    {crypto.price_change_percentage_24h < 0 ? <i className="fas fa-sort-down align-middle mr-1"></i> : <i className="fas fa-sort-up align-middle mr-1"></i>}
                      {crypto.price_change_percentage_24h} %</span>
                 <i className="delete-icon far fa-times-circle text-danger" onClick={(e) => {
                      e.preventDefault();
                     verwijderCrypto(crypto.id);
                     }}>
                         {/* <i className="delete-icon far fa-times-circle text-danger" onClick={(e) => {
                     verwijderCrypto(crypto.id);
                     }}>*/}
                     </i>
            </li><br />
            </center>
        </Link>
    )
}


// <img className="coinlist-image" src={crypto.image} ></img>
//<span className="text-decoration-none">€ {crypto.current_price}</span>
//<span className="text-success mr-2"><i className="fas fa-sort-down align-middle mr-1"></i> {crypto.price_change_percentage_24h}</span>
// <i className="delete-icon far fa-times-circle text-danger"></i>
export default Crypto