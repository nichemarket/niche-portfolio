import styled from "styled-components"
import React from 'react'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.white};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100%;
  text-align: left;
  padding: 0 7rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
      padding: 0rem;
    }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    color: ${props => props.theme.black};
    text-decoration: none;
    transition: color 0.2s linear;

    @media (max-width: 576px) {
      font-size: 2rem;
      text-align: center;
    }

    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        about us
      </a>
      <a href="/">
        pricing
        </a>
      <a href="/">
        contact
        </a>
    </StyledMenu>
  )
}

export default Menu