import styled from "styled-components";

export const HabitContainer = styled.div`

    width: 100%;
    height: 90px;
    min-height: 90px;
  
    background: #FFFFFF;
  
    border-radius: 5px;  

    position: relative;
    padding: 14px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    svg {
        position: absolute;
        top: 10px;
        right: 10px;

        color: #666666;
    }

`;
export const Days = styled.div`

    display: flex;
    gap: 4px;

`;

export const Weekday = styled.div`

    width: 30px;
    height: 30px;

    background-color: ${props => props.status === "marked" ? "#CFCFCF" : "#FFFFFF"};

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;

    color: ${props => props.status === "marked" ? "#FFFFFF" : "#CFCFCF"};

`;