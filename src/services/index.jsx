import axios from "axios";
import {Navigate} from "react-router-dom";

const SERVER_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export const serverSignUp = (info) => {
    const request = axios.post(`${SERVER_URL}/auth/sign-up`, info);

    request.then(resposta => console.log((JSON.stringify(resposta, null, 2))));
}
export const serverLogin = (info, navigate, path) => {
    const request = axios.post(`${SERVER_URL}/auth/login`, info);

    request.then(() => navigate(path));
    request.catch((resposta) => alert(resposta.message));
}