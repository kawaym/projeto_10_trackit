import IndividualHabit from "./IndividualHabit";
import { InfoConclusion, TopMenu, HabitsContainer } from "./style";

export default function TodayPage(){
    return(
        <>
        <TopMenu>
            <h1>Segunda, 17/05</h1>
            <InfoConclusion status={true}>Nenhum hábito concluído ainda</InfoConclusion>
        </TopMenu>
        <HabitsContainer>
            <IndividualHabit></IndividualHabit>
            <IndividualHabit></IndividualHabit>
            <IndividualHabit></IndividualHabit>
            <IndividualHabit></IndividualHabit>
            <IndividualHabit></IndividualHabit>
            <IndividualHabit></IndividualHabit>
            <IndividualHabit></IndividualHabit>
            <IndividualHabit></IndividualHabit>
            <IndividualHabit></IndividualHabit>
        </HabitsContainer>
        </>
    );
};