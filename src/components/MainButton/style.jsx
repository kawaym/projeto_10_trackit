import styled from "styled-components";

const mainColor = "#52B6FF";
const buttonTextColor = "#FFFFFF";

const Button = styled.button.attrs(props => ({
    disabled: props.disabled,
}))`
    width: 303px;
    height: 45px;

    border-radius: 4.63636px;
    background: ${mainColor};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: ${buttonTextColor};

    :disabled{
        opacity: 0.7;
    }
`;

export default Button;