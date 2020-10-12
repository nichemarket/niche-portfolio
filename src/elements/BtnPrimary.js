import styled from "styled-components";

const BtnPrimary = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');
    font-family: "Poppins", sans-serif;
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