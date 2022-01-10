import { useContext, useState } from "react";
import { UserContext } from "../../contexts";
import { serverListHabits } from "../../services";
import CreationHabit from "./CreationHabit";
import IndividualHabit from "./IndividualHabit";
import { TopMenu, MessageText, HabitsContainer } from "./style";

export default function HabitsPage(){
    const NoHabitMessage = <MessageText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MessageText>
    const [ isCreatingHabit, setIsCreatingHabit ] = useState(false);
    const [ userHabits, setUserHabits] = useState([]);
    const { user } = useContext(UserContext);

    serverListHabits(user.token, setUserHabits);
    
    return(
        <>
            <TopMenu>
                <p>Meus hábitos</p>
                <button type="button" onClick={() => setIsCreatingHabit(true)}>
                    +
                </button>
            </TopMenu>
            <HabitsContainer>
                {isCreatingHabit && <CreationHabit setIsCreatingHabit={setIsCreatingHabit}/>}
                {userHabits === [] && NoHabitMessage}
                {userHabits.map((habit) => <IndividualHabit habitInfo={habit}/>)}
            </HabitsContainer>
        </>
    );
}