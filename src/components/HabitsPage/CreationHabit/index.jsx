import { ButtonsContainer, HabitCreationContainer, HabitNameInput } from "./style";
import { Days, Weekday } from "../style";
import MainButton from "../../MainButton";

export default function CreationHabit(){
    const weekdays = [
        {
            day: "D",
            status: "marked",
        },
        {
            day: "S",
            status: "unmarked",
        },
        {
            day: "T",
            status: "marked",
        },
        {
            day: "Q",
            status: "marked",
        },
        {
            day: "Q",
            status: "unmarked",
        },
        {
            day: "S",
            status: "marked",
        },
        {
            day: "S",
            status: "marked",
        },
    ]
    return (
        <HabitCreationContainer>
            <HabitNameInput
                placeholder="nome do hábito"
            >
            </HabitNameInput>
            <Days>
                {weekdays.map((day) => <Weekday status={day.status} key={weekdays.indexOf(day)}>{day.day}</Weekday>)}
            </Days>

            <ButtonsContainer>
                <button type="reset">Cancelar</button>
                <MainButton text="Salvar"/>
            </ButtonsContainer>
        </HabitCreationContainer>
    );
};