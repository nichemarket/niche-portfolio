import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Header1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
    color: ${props =>  props.theme.white};
    font-size: 8rem;
    padding: 0;
    margin: 0;
    line-height: 8rem;
    text-align: center;
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
            </TitleWrapper>
        </>
    )
}

