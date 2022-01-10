import { useContext, useState } from "react";
import { Formik } from "formik";

import { ButtonsContainer, HabitCreationContainer, HabitNameInput } from "./style";
import { Days, Weekday } from "../style";
import MainButton from "../../MainButton";

import { serverCreateHabit } from "../../../services";

import { UserContext } from "../../../contexts";

export default function CreationHabit({ setIsCreatingHabit }){

    const { user } = useContext(UserContext);

    const [ weekdays, setWeekdays ] = useState([
        {
            id: 1,
            name: "D",
            status: "unmarked"
        },
        {
            id: 2,
            name: "S",
            status: "unmarked"
        },
        {
            id: 3,
            name: "T",
            status: "unmarked"
        },
        {
            id: 4,
            name: "Q",
            status: "unmarked"
        },
        {
            id: 5,
            name: "Q",
            status: "unmarked"
        },
        {
            id: 6,
            name: "S",
            status: "unmarked"
        },
        {
            id: 7,
            name: "S",
            status: "unmarked"
        },
    ])

    function handleSelection(day){
        let dayList = [...weekdays];
        if (dayList[dayList.indexOf(day)].status === "marked"){
            dayList[dayList.indexOf(day)].status = "unmarked"
        }
        else {
            dayList[dayList.indexOf(day)].status = "marked"
        }
        setWeekdays([...dayList]);
    }

    return (
        <HabitCreationContainer>
            <Formik
                initialValues={{name: ''}}
                onSubmit={async values => {
                    const postObject = {name: values.name, days: weekdays.filter((day) => day.status === "marked").map((day) => day.id)}
                    serverCreateHabit(user.token, postObject);
                    setIsCreatingHabit(false);
                }}
            >
                {props => {
                    const {
                        values,
                        isSubmitting,
                        handleSubmit,
                        handleChange,
                    } = props;
                
                    return(
                        <form onSubmit={handleSubmit}>
                            <HabitNameInput
                                name="name"
                                placeholder="nome do hábito"
                                value={values.name}
                                onChange={handleChange}
                            >
                            </HabitNameInput>
                            <Days>
                                {weekdays.map((day) => <Weekday status={day.status} key={day.id} onClick={() => handleSelection(day)}>{day.name}</Weekday>)}
                            </Days>

                            <ButtonsContainer>
                                <button type="button" onClick={() => setIsCreatingHabit(false)}>Cancelar</button>
                                <MainButton text="Salvar"/>
                            </ButtonsContainer>    
                        </form>
                    );
                }}
            </Formik>
        </HabitCreationContainer>
    );
};