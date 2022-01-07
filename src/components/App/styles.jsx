import styled from "styled-components";

const mainColor = "#52B6FF";

const Container = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    svg{
        margin-top: 45px;
        margin-bottom: 45px;
    }

    p{
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: ${mainColor};
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`;

export default Container;