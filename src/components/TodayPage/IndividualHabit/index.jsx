import { ConclusionButton, HabitContainer, HabitInfo, HabitTitle } from "./style";
import { BsCheckLg } from "react-icons/bs"

export default function IndividualHabit(){
    return(
        <HabitContainer>
            <HabitTitle>Ler 1 capítulo por dia</HabitTitle>
            <HabitInfo>
                <p>Sequência atual: <span>4 dias</span></p>
                <p>Sequência atual: <span>4 dias</span></p>
            </HabitInfo>
            <ConclusionButton type="button">
                <BsCheckLg/>
            </ConclusionButton>
        </HabitContainer>
    );
};