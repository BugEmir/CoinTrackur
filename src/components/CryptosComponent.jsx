import React, { useContext, useEffect, useState } from "react";
import geckoAPI from "../api/apiGecko";
import { CryptoListContext } from "../fuckRedux/cryptoListContext";
import Crypto from "./Crypto";
// Onze axios object zit in geckoAPI
//import axios from "axios";

/* Hier fetchen we data vanuit de coingecko API */
/* We willen alleen data fetchen als de component mount*/
const CryptosComponent = () => {
    const [cryptos, setCrypto] = useState([])
    const {cryptoList, verwijderCrypto} = useContext(CryptoListContext)
    const [aanLaden, setAanLaden] = useState(false)
    //console.log(cryptoList);
    useEffect(() => {
        const fetchAPIData = async () => {
            setAanLaden(true)
           const reactie = await geckoAPI.get("/coins/markets", {
                params: {
                    vs_currency: "eur",
                    ids: cryptoList.join(","),
                },
            });
            //console.log(reactie.data) 
            setCrypto(reactie.data)
            setAanLaden(false)
        };
            if (cryptoList.length > 0) {
            fetchAPIData();
        } else {
            setCrypto([]);
        }
    },[cryptoList]); // we passen een dependency array

    const outputCryptoCurrencies = () => {
        if(aanLaden) {
            return <div>Its loading...</div>
        }
        // crypto.id == de crypto currency naam in API
        return (
            <ul className="cryptolist list-group mt-2"> 
            {cryptos.map(crypto => {
                return <Crypto key={crypto.id} crypto={crypto} verwijderCrypto={verwijderCrypto} />
            })}
            </ul>
        )
    }
    return (
        <div>
          {outputCryptoCurrencies()}
        </div>
    )
}

export default CryptosComponent;