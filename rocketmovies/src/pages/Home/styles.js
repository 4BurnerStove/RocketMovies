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
  width: 114rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > header {
    width: 100%;
    height: 5rem;
    display: flex;
    margin-top: ;
    justify-content: space-between;

     button { 
    width: 20.7rem;
  }
 }

`