import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root{
    --background : #0F1020 ;
}

*{
    margin: 0 ;
    padding: 0 ;
    box-sizing: 0 ;
}

body{
    background: var(--background) ;
    -webkit-font-smoothing: antialiased;
}

`