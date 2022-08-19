import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import DocumentationPage from "./DocumentationPage";
import SupportPage from "./SupportPage";

const Layout = () => {
    return (
        <BrowserRouter>
            
            <Header />


            <Routes>
                <Route path="/" element={<MainPage title="The Dark API"/>}/>
                <Route path="/documentation" element={<DocumentationPage title="Documentation"/>}/>
                <Route path="/about" element={<AboutPage title="About"/>}/>
                <Route path="/support" element={<SupportPage title="Support The Dark API"/>}/>
            </Routes>

            <Footer />

        </BrowserRouter>
    )
}

export default Layout;