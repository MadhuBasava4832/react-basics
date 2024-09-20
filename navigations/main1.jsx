import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Home1 from "./Home1";

export const Navigations1 = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Home1/>}/>
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
