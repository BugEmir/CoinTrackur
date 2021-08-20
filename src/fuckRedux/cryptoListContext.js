import React, { createContext, useState } from "react";

export const CryptoListContext = createContext();
export const CryptoListProvider = props => {
    const [cryptoList, setCryptoList] = useState(["bitcoin", "ripple", "vechain"]);
    // we passen de 3 belangerijkste cryptocurrencies voor mij

    const verwijderCrypto = (crypto) => {
        setCryptoList(cryptoList.filter(element => {
            return element !== crypto 
        }));
    };
    return (
        <CryptoListContext.Provider value={{cryptoList, verwijderCrypto}}>
                {props.children}
        </CryptoListContext.Provider>
    );
};