import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import "./custom.css"
/* Hier Importeren we onze Components van Pagina map */
import CryptoOverzichtComponent from "./paginas/CryptoOverzichtComponent";
import CryptoDetailComponent from "./paginas/CryptoDetailComponent";
import HeaderComponent from "./components/HeaderComponent";
import { CryptoListContext, CryptoListProvider } from "./fuckRedux/cryptoListContext";
import ToastComponent from "./components/ToastComponent";


const App = () => {
    return (
        <div>
            <CryptoListProvider>
                <BrowserRouter>
                <Navbar />
                </BrowserRouter>
            <ToastComponent />
            <BrowserRouter>
                <Route exact path="/" component={CryptoOverzichtComponent} />
            </BrowserRouter>
            </CryptoListProvider>
            
        </div>
    )
}

export default App