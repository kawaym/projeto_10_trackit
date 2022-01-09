import IndividualHabit from "./IndividualHabit";
import { TopMenu, MessageText, HabitsContainer } from "./style";

export default function HabitsPage(){
    const NoHabitMessage = <MessageText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MessageText>
    return(
        <>
            <TopMenu>
                <p>Meus hábitos</p>
                <button type="button">
                    +
                </button>
            </TopMenu>
            <HabitsContainer>
                <IndividualHabit></IndividualHabit>
                {true && NoHabitMessage}
            </HabitsContainer>
        </>
    );
}