import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import '#root/assets/styles/index.css'
import Burger from '#components/nav/Burger';
import Menu from '#components/nav/Menu';

const Header1 = styled.h1`
    font-size: 8rem;
    padding: 0;
    margin: 0;
    line-height: 8rem;
    text-align: center;

    @media (max-width: 925px) {
       font-size: 6rem;
       line-height: 4rem;
    }

    @media (max-width: 700px) {
       font-size: 5rem;
       line-height: 1rem;
    }

    @media (max-width: 580px) {
       font-size: 4rem;
       line-height: 1rem;
    }

    @media (max-width: 450px) {
       font-size: 3.5rem;
       line-height: .1rem;
    }

    @media (max-width: 400px) {
       font-size: 3rem;
       line-height: 0px;
    }

    @media (max-width: 334px) {
       font-size: 2.7rem;
       line-height: 0px;
    }
`

const Header2 = styled.span`
    color: ${props =>  props.theme.primary};
    font-size: 8rem;
    padding: 0;
    margin: 0;
    line-height: 8rem;
    text-align: center;

    @media (max-width: 925px) {
       font-size: 6rem;
       
    }

    @media (max-width: 700px) {
       font-size: 5rem;
    }

    @media (max-width: 580px) {
       font-size: 4rem;
    }

    @media (max-width: 450px) {
       font-size: 3.5rem;
    }

    @media (max-width: 400px) {
       font-size: 3rem;
    }

    @media (max-width: 334px) {
       font-size: 2.7rem;
    }
`

const TitleWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function App() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <TitleWrapper>
         <Header1>modernize</Header1>
         <Header1>your business<Header2>.</Header2></Header1>
      </TitleWrapper>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  )  
}

const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
     };
     document.addEventListener('mousedown', listener);
  
     return () => {
       document.removeEventListener('mousedown', listener);
     };
   },
   [ref, handler],
   );
  };