import { useContext, useState } from "react";
import { Formik } from "formik";

import { ButtonsContainer, HabitCreationContainer, HabitNameInput } from "./style";
import { Days, Weekday } from "../style";
import MainButton from "../../MainButton";

import { serverCreateHabit } from "../../../services";

import { UserContext } from "../../../contexts";

export default function CreationHabit({ setIsCreatingHabit, creationData, setCreationData }){

    const { user } = useContext(UserContext);

    function handleSelection(day){
        let dayList = [...creationData.days];
        if (dayList[dayList.indexOf(day)].status === "marked"){
            dayList[dayList.indexOf(day)].status = "unmarked"
        }
        else {
            dayList[dayList.indexOf(day)].status = "marked"
        }
        setCreationData({...creationData, days: [...dayList]});
    }
    return (
        <HabitCreationContainer>
            <Formik
            initialValues={{name: creationData.name}}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    const postObject = {name: values.name, days: creationData.days.filter((day) => day.status === "marked").map((day) => day.id - 1)}
                    setCreationData({...creationData, days: [
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
                    ]});
                    serverCreateHabit(user.token, postObject, setIsCreatingHabit);
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
                                disabled={isSubmitting}
                            >
                            </HabitNameInput>

                            <Days>
                                {creationData.days.map((day) => <Weekday status={day.status} key={day.id} onClick={() => handleSelection(day)}>{day.name}</Weekday>)}
                            </Days>

                            <ButtonsContainer>
                                <button type="button" disabled={isSubmitting} onClick={() => {setIsCreatingHabit(false); setCreationData({name: values.name, days: creationData.days})}}>Cancelar</button>
                                <MainButton disabled={isSubmitting} text="Salvar"/>
                            </ButtonsContainer>    
                        </form>
                    );
                }}
            </Formik>
        </HabitCreationContainer>
    );
};