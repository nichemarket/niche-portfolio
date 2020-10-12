import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import BtnPrimary from '#root/elements/BtnPrimary'

const Header1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
    color: ${props =>  props.theme.white};
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
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
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

const Main = createGlobalStyle`
   * {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
   }

   body {
       background: ${props =>  props.theme.black};
       margin: 0;
       padding: 0;
   }
`

export default function App() {
    return (
        <>
            <Main />
            <TitleWrapper>
                <Header1>portfolio</Header1>
                <Header1>coming soon<Header2>.</Header2></Header1>
                <br/>
                <br/>
                <BtnPrimary href="https://github.com/nichemarket/niche-portfolio/tree/main">See My Progress on Github</BtnPrimary>
            </TitleWrapper>
        </>
    )
}

