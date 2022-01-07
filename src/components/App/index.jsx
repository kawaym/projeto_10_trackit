import { BrowserRouter, Routes, Route}  from "react-router-dom";
import { Helmet } from  "react-helmet";

import LoginPage from "../LoginPage";

import ResetStyle from "./reset";
import DataForm from "../teste";
import SignUpPage from "../SignUpPage";

export default function App(){
    return(
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            </Helmet>
            <ResetStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUpPage />}></Route> 
                </Routes>
            </BrowserRouter>
        </>
    );
}