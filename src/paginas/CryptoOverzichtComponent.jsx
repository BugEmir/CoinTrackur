import React from "react";
import CryptosComponent from "../components/CryptosComponent";
import VoegCryptoComponent from "../components/VoegCryptoComponent";

const CryptoOverzichtComponent = () => {
    return (
        <div>
            <VoegCryptoComponent /> 
            <CryptosComponent />
        </div>
    )
}

export default CryptoOverzichtComponent