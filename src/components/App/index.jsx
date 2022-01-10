import { BrowserRouter, Routes, Route}  from "react-router-dom";
import { Helmet } from  "react-helmet";

import ResetStyle from "./reset";

import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import PageFrame from "../PageFrame";
import HabitsPage from "../HabitsPage";
import TodayPage from "../TodayPage";
import HistoryPage from "../HistoryPage";

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
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/cadastro" element={<SignUpPage />}></Route>
                    <Route path="/habitos" element={<PageFrame><HabitsPage></HabitsPage></PageFrame>}></Route>
                    <Route path="/hoje" element={<PageFrame><TodayPage></TodayPage></PageFrame>}></Route>
                    <Route path="/historico" element={<PageFrame><HistoryPage></HistoryPage></PageFrame>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}