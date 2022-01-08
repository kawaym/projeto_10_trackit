import styled from "styled-components";

const mainColor = "#52B6FF";

 export const Progress = styled.div`
    width: 90px;
    height: 90px;

    border-radius: 50%;

    margin-bottom: 30px;
    padding: 5px;

    background-color: ${mainColor};
    p{
        position: absolute;
        top: 38px;
        left: 50%;
        transform: translate(-50%, -50%);
        
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        color: #FFFFFF;
    }
`

