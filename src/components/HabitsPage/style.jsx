import styled from "styled-components";

export const TopMenu = styled.div`

    display: flex;
    justify-content: space-between;

    p{
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 35px;
        
        background: #52B6FF;
        border-radius: 4.63636px;     
        
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;
        color: #FFFFFF;
    }
`;
export const HabitsContainer = styled.div`
    padding-top: 30px;  

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