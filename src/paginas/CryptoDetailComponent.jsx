import React from "react";
import { useParams } from "react-router-dom";

const CryptoDetailComponent = () => {
    const {id} = useParams()
    return (
        <div>
            Detail Pagina
        </div>
    )
}

export default CryptoDetailComponent