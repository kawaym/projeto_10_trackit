import styled from "styled-components";
const background = '#FFFFFF';
const borderColor = '#DBDBDB';
const fontColor = '#000000';

const Input = styled.input`
    width: 303px;
    height: 45px;

    background: ${background};
    border: 1px solid ${borderColor};
    padding: 10px;
    border-radius: 5px;
    

    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */
    
    color: ${fontColor};

    &::placeholder {
        color: ${borderColor};
    }
`
export default Input;