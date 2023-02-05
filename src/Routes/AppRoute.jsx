import React from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from '../Components/Home';
import Page from '../Components/Page';
import Parameters from '../Components/Parameters';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= '*' element={<Home />} />
                <Route path= '/home' element={<Home />} />
                <Route path= '/:parameter' element={<Page />} />
                <Route
                    path= ':parameter/:color1/:color2'
                    element={<Parameters />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;