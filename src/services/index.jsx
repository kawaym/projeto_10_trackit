import axios from "axios";
import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale';
import locale from "dayjs/locale/pt-br";

const SERVER_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export const serverSignUp = (info) => {
    const request = axios.post(`${SERVER_URL}/auth/sign-up`, info);

    request.then();
}
export const serverLogin = (info, navigate, setUser, path) => {
    const request = axios.post(`${SERVER_URL}/auth/login`, info);

    request.then((answer) => {
        setUser(answer.data);
        navigate(path);
    });
    request.catch((answer) => alert(answer.message));
}
export const serverGetInfo = (token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.get(`${SERVER_URL}/habits/today`, config);
    promise.then();
}
export const serverCreateHabit = (token, body, setIsCreatingHabit) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    if (body.days.length === 0){
        alert("Insira ao menos um dia");
        return;
    }
    const request = axios.post(`${SERVER_URL}/habits`, body, config);
    request.then(answer => {
        setIsCreatingHabit(false);
    });
    request.catch(requestAnswer => {
        alert(requestAnswer.message);
    });
}
export const serverListHabits = (token, setUserHabits, setHabits) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.get(`${SERVER_URL}/habits`, config);
    promise.then(answer => setUserHabits(answer.data));
    serverListTodayHabits(token, setHabits);
}
export const serverDeleteHabit = (token, id, setUserHabits) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    if (window.confirm("Você realmente deseja apagar esse hábito?")){
        const promise = axios.delete(`${SERVER_URL}/habits/${id}`, config);
        promise.then(answer => serverListHabits(token, setUserHabits))
    }
}

export const serverListTodayHabits = (token, setHabits) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.get(`${SERVER_URL}/habits/today`, config);
    promise.then(answer => setHabits(answer.data));
}

export const serverToggleTodayHabit = (token, done, id, setHabits) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const toggle = done ? "uncheck" : "check";
    const request = axios.post(`${SERVER_URL}/habits/${id}/${toggle}`, { done: done }, config);
    request.then(answer => serverListTodayHabits(token, setHabits));
}

export const getToday = () => {
    dayjs.locale(locale);
    const today = dayjs().format('dddd, DD/MM');
    return today;
}