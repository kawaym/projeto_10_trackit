import { HabitContainer } from "./style";
import { Days, Weekday } from "../style";
import { BsTrash } from "react-icons/bs"
import { serverDeleteHabit, serverListHabits } from "../../../services";
import { useContext } from "react";
import { UserContext } from "../../../contexts";

export default function IndividualHabit({habitInfo, setUserHabits}){
    const weekdays = [
        {
            day: "D",
            status: habitInfo.days.includes(0) ? "marked" : "unmarked",
        },
        {
            day: "S",
            status: habitInfo.days.includes(1) ? "marked" : "unmarked",
        },
        {
            day: "T",
            status: habitInfo.days.includes(2) ? "marked" : "unmarked",
        },
        {
            day: "Q",
            status: habitInfo.days.includes(3) ? "marked" : "unmarked",
        },
        {
            day: "Q",
            status: habitInfo.days.includes(4) ? "marked" : "unmarked",
        },
        {
            day: "S",
            status: habitInfo.days.includes(5) ? "marked" : "unmarked",
        },
        {
            day: "S",
            status: habitInfo.days.includes(6) ? "marked" : "unmarked",
        },
    ]
    const { user } = useContext(UserContext);
    return(
        <HabitContainer>
            <BsTrash onClick={() => {
                serverDeleteHabit(user.token, habitInfo.id, setUserHabits);
            }} />
            <p>
                {habitInfo.name}
            </p>
            <Days>
                {weekdays.map((day) => <Weekday status={day.status} key={weekdays.indexOf(day)}>{day.day}</Weekday>)}
            </Days>
        </HabitContainer>
    );
}