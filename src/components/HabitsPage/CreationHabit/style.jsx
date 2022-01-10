import styled from "styled-components";

export const HabitCreationContainer = styled.div`

    border-radius: 5px;
    width: 100%;
    min-height: 180px;
    
    padding: 18px;

    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    gap: 8px;

    position: relative;

    button{
        width: 84px;
        height: 35px;

        font-size: 15.976px;
        text-align: center;

        color: #52B6FF;
    }

    button:last-of-type{
        color: #FFFFFF;
    }

`;

export const HabitNameInput = styled.input`
    
    height: 45px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;

    display: flex;
    align-items: center;

    font-family: Lexend Deca;
    font-size: 19.976px;
    color: #666666;

    &::placeholder{
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        text-align: left;
        color: #DBDBDB;
    }
`;

export const ButtonsContainer = styled.div`
    
    position: absolute;
    bottom: 18px;

    display: flex;
    align-self: flex-end;

`;