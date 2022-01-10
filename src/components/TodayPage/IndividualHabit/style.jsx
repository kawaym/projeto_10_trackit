import styled from "styled-components";

export const HabitContainer = styled.div`

    width: 100%;
    height: 94px;
    min-height: 94px;

    background: #FFFFFF;
    border-radius: 5px;

    padding: 13px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    position: relative;

`;

export const HabitTitle = styled.div`
  
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;

`;

export const HabitInfo = styled.div`

    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;

    p span{
        color: #8FC549;
    }

`

export const ConclusionButton = styled.button`
    width: 69px;
    height: 69px;

    border-radius: 5px;
    background-color: ${props => props.status ? "#8FC549" :  "#EBEBEB"};

    position: absolute;
    top: 13px;
    right: 13px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        font-size: 35px;
        color: #FFFFFF
    }

`;