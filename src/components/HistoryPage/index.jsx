import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts";

import { HistoryContainer, TopMenu } from "./style";

export default function HistoryPage(){
    
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user.id === null){
            navigate("/")
        }
    }, [user]);

    return(
        <>
            <TopMenu>Histórico</TopMenu>
            <HistoryContainer>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </HistoryContainer>
        </>
    );
}