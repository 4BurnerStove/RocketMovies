import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding-top: 4.7rem;
  justify-content: space-around;


  > button { 
    width: 20.7rem;
  }
`