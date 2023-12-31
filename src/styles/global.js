import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import Avatar from "../Assets/avatar_placeholder.svg";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200 };
    color: ${({ theme }) => theme.COLORS.WHITE };

    -webkit-font-smoothing: antialiased;  
  }
`
