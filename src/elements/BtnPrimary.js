import styled from "styled-components";

const BtnPrimary = styled.button`
    background-color: ${props => props.theme.primary};
    border-radius: 50px;
    padding: .5rem 1rem;
    border: none;
    outline: none;
    transition: ease-in-out .3s;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.white};
    }
`
export default BtnPrimary