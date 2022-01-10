import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodayHabitsContext, UserContext } from "../../contexts";
import { serverGetInfo } from "../../services";
import IndividualHabit from "./IndividualHabit";

import { InfoConclusion, TopMenu, HabitsContainer, MessageText } from "./style";

export default function TodayPage(){
    const { user } = useContext(UserContext);
    const { habits } = useContext(TodayHabitsContext);

    const navigate = useNavigate();
    
    useEffect(() => {
        if (user.id === null){
            navigate("/")
        }
    }, [user]);

    serverGetInfo(user.token);

    const NoHabitMessage = <MessageText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MessageText>;

    return(
        <>
        <TopMenu>
            <h1>Segunda, 17/05</h1>
            <InfoConclusion status={true}>Nenhum hábito concluído ainda</InfoConclusion>
        </TopMenu>
        <HabitsContainer>
            {habits === undefined && NoHabitMessage}
            {habits !== undefined && habits.data.map(() => <IndividualHabit></IndividualHabit>)}
        </HabitsContainer>
        </>
    );
};