import { Days, HabitContainer, Weekday } from "./style";
import { BsTrash } from "react-icons/bs"

export default function IndividualHabit(){
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return(
        <HabitContainer>
            <BsTrash />
            <p>
                Ler 1 capítulo de livro
            </p>
            <Days>
                {weekdays.map((day) => <Weekday status="unmarked">{day}</Weekday>)}
            </Days>
        </HabitContainer>
    );
}