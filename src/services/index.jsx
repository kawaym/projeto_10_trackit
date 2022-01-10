import axios from "axios";

const SERVER_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export const serverPost = (info) => {
    const promise = axios.post(`${SERVER_URL}/auth/sign-up`, info);

    promise.then(resposta => console.log((JSON.stringify(resposta, null, 2))));
}