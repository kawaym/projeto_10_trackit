import dayjs from "dayjs";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodayHabitsContext, UserContext } from "../../contexts";
import { getToday, serverGetInfo, serverListTodayHabits } from "../../services";
import IndividualHabit from "./IndividualHabit";

import { InfoConclusion, TopMenu, HabitsContainer, MessageText } from "./style";

export default function TodayPage(){

    const { user } = useContext(UserContext);
    const { habits, setHabits } = useContext(TodayHabitsContext);

    const navigate = useNavigate();
    
    useEffect(() => {
        if (user.id === null){
            navigate("/")
        }
    }, [user]);

    useEffect(() => {
        serverListTodayHabits(user.token, setHabits);
    }, []);


    serverGetInfo(user.token);

    const NoHabitMessage = <MessageText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MessageText>;

    const totalHabits = habits.length;
    const doneHabits = habits.filter((habit) => habit.done === true).length;

    const percentage = (doneHabits / totalHabits * 100).toFixed(0);
    return(
        <>
            <TopMenu>
                <h1>{getToday()}</h1>
                {percentage === '0' && <InfoConclusion status={false}>Nenhum hábito concluído ainda</InfoConclusion>}
                {percentage !== '0' && <InfoConclusion status={true}>{percentage}% dos hábitos concluídos</InfoConclusion>}
            </TopMenu>
            <HabitsContainer>
                {habits.length === 0 && NoHabitMessage}
                {habits.length !== 0 && habits.map((habit) => <IndividualHabit   
                                                    key={habit.id}
                                                    id={habit.id}
                                                    name={habit.name}
                                                    done={habit.done}
                                                    currentSequence={habit.currentSequence}
                                                    highestSequence={habit.highestSequence}
                                                    token={user.token}
                                                    setHabits={setHabits}
                                                 ></IndividualHabit>)}
            </HabitsContainer>
        </>
    );
};