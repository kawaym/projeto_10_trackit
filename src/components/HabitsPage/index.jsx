import { useContext, useEffect, useState } from "react";
import { TodayHabitsContext, UserContext } from "../../contexts";
import { serverListHabits } from "../../services";
import CreationHabit from "./CreationHabit";
import IndividualHabit from "./IndividualHabit";
import { TopMenu, MessageText, HabitsContainer } from "./style";

export default function HabitsPage(){
    const NoHabitMessage = <MessageText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MessageText>
    const [ isCreatingHabit, setIsCreatingHabit ] = useState(false);
    const [ userHabits, setUserHabits] = useState([]);
    const [ creationData, setCreationData ] = useState({name: '', days: [
        {
            id: 1,
            name: "D",
            status: "unmarked"
        },
        {
            id: 2,
            name: "S",
            status: "unmarked"
        },
        {
            id: 3,
            name: "T",
            status: "unmarked"
        },
        {
            id: 4,
            name: "Q",
            status: "unmarked"
        },
        {
            id: 5,
            name: "Q",
            status: "unmarked"
        },
        {
            id: 6,
            name: "S",
            status: "unmarked"
        },
        {
            id: 7,
            name: "S",
            status: "unmarked"
        },
    ]});

    
    const { setHabits } = useContext(TodayHabitsContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        serverListHabits(user.token, setUserHabits, setHabits);
    }, [isCreatingHabit])
    console.log(userHabits);
    return(
        <>
            <TopMenu>
                <p>Meus hábitos</p>
                <button type="button" onClick={() => setIsCreatingHabit(true)}>
                    +
                </button>
            </TopMenu>
            <HabitsContainer>
                {isCreatingHabit && <CreationHabit setIsCreatingHabit={setIsCreatingHabit} creationData={creationData} setCreationData={setCreationData}/>}
                {userHabits.length === 0 && !isCreatingHabit && NoHabitMessage}
                {userHabits.map((habit) => <IndividualHabit habitInfo={habit} key={habit.id} setUserHabits={setUserHabits}/>)}
            </HabitsContainer>
        </>
    );
}