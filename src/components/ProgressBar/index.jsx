import { useContext } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { TodayHabitsContext } from "../../contexts";
import { Progress } from "./style";

export default function ProgressBar(){
    
    const { habits } = useContext(TodayHabitsContext);
    
    const totalHabits = habits.length;
    const doneHabits = habits.filter((habit) => habit.done === true).length;
    
    return (
        <Progress>
            <CircularProgressbarWithChildren
                value={doneHabits/totalHabits * 100}
                styles={{
                    path: {
                        stroke: "#FFFFFFFF",
                        strokeLinecap: 'round',
                    }
                }}  
            >
                <p>Hoje</p>
            </CircularProgressbarWithChildren>
        </Progress>
    );
}