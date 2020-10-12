import styled from "styled-components";

const BtnPrimary = styled.button`
    background-color: ${props => props.theme.primary};
    width: 5rem;
    height: 2rem;
    border-radius: 50px;
    border: none;
    outline: none;
    transition: ease-in-out .3s;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.white};
    }
`
export default BtnPrimary