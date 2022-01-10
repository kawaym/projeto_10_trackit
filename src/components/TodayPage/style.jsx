import styled from "styled-components";

export const TopMenu = styled.div`
    
    display: flex;
    flex-direction: column;

    margin-bottom: 15px;

    h1{
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

`;

export const InfoConclusion = styled.h2`

    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;

    color: ${props => props.status ? "#8FC549" : "#BABABA"};

`;

export const HabitsContainer = styled.div`

    padding-top: 15px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    overflow-y: scroll;
`
export const MessageText = styled.p`

    width: 338px;
    height: 74px;
    left: 17px;
    top: 155px;
    
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;

`;