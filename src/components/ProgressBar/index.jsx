import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Progress } from "./style";

export default function ProgressBar(){
    return (
        <Progress>
            <CircularProgressbarWithChildren
                value={67}
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