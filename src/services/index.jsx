import axios from "axios";

const SERVER_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export const serverSignUp = (info) => {
    const request = axios.post(`${SERVER_URL}/auth/sign-up`, info);

    request.then(resposta => console.log((JSON.stringify(resposta, null, 2))));
}
export const serverLogin = (info, navigate, setUser, path) => {
    const request = axios.post(`${SERVER_URL}/auth/login`, info);

    request.then((resposta) => {
        setUser(resposta.data);
        navigate(path);
    });
    request.catch((resposta) => alert(resposta.message));
}
export const serverGetInfo = (token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.get(`${SERVER_URL}/habits/today`, config);
    promise.then((resposta) => console.log(resposta));
}
export const serverCreateHabit = (token, body) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const request = axios.post(`${SERVER_URL}/habits`, body, config);
    request.then(resposta => console.log(JSON.stringify(resposta, null, 2)))
}
export const serverListHabits = (token, setUserHabits) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.get(`${SERVER_URL}/habits`, config);
    promise.then(resposta => setUserHabits(resposta.data))
}