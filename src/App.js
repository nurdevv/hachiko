import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Faq from "./pages/FAQ";
import Wallet from "./pages/Wallet";
import Menu from "./components/Menu";

import "./css/style.css"

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/wallet" element={<Wallet/>}/>
            </Routes>
            <Menu/>
        </div>
    )
        ;
};

export default App;