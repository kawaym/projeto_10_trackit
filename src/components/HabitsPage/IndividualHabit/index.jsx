import { HabitContainer } from "./style";
import { Days, Weekday } from "../style";
import { BsTrash } from "react-icons/bs"

export default function IndividualHabit(){
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
    return(
        <HabitContainer>
            <BsTrash />
            <p>
                Ler 1 capítulo de livro
            </p>
            <Days>
                {weekdays.map((day) => <Weekday status={day.status} key={weekdays.indexOf(day)}>{day.day}</Weekday>)}
            </Days>
        </HabitContainer>
    );
}