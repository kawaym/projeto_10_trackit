import { ConclusionButton, HabitContainer, HabitInfo, HabitTitle } from "./style";
import { BsCheckLg } from "react-icons/bs"
import { serverToggleTodayHabit } from "../../../services";

export default function IndividualHabit({ name, done, currentSequence, highestSequence, id, token, setHabits }){
    const isEqual = highestSequence === currentSequence;
    return(
        <HabitContainer>
            <HabitTitle>{name}</HabitTitle>
            <HabitInfo done={done} isEqual={isEqual}>
                <p>Sequência atual: <span>{currentSequence} {currentSequence  <= 1 ? "dia" : "dias"}</span></p>
                <p>Seu recorde: <span>{highestSequence} {highestSequence  <= 1 ? "dia" : "dias"}</span></p>
            </HabitInfo>
            <ConclusionButton type="button" status={done} onClick={() => serverToggleTodayHabit(token, done, id, setHabits)}>
                <BsCheckLg/>
            </ConclusionButton>
        </HabitContainer>
    );
};