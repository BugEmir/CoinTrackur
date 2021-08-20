import axios from "axios";

/* Zodat we simpel vanuit axios.create endpoint kunnen aangeven*/
export default axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
})