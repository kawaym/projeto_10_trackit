import styled from "styled-components";

const mainColor = "#52B6FF";
const menuColor = "#126BA5"

export const TopMenu = styled.div`
    width: 100%;
    height: 70px;

    position: fixed;
    z-index: 1;
    top: 0;

    background-color: ${menuColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
export const ContainerPage = styled.div`
    width: 100%;
    
    position: fixed;
    top: 0;
    bottom: 0;
    
    background-color: #E5E5E5;
`
export const BottomMenu = styled.div`
    width: 100%;

    position: fixed;
    z-index: 1;
    bottom: 0;

    background-color: #FFFFFF;
    height: 70px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 17px;
    text-align: center;

    color: ${mainColor};
`