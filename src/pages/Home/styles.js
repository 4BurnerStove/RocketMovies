import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > div {
    width: 75%;
    margin: 0 auto;

    header { 
    width: 100%;
    margin-bottom: 6.8rem;
    display: flex;
    margin-top: 4.8rem;
    justify-content: space-between;

    button { 
      width: 20.7rem;
  }}}
`

export const Content = styled.div`
  width: 95.2%;
  overflow-y: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const List = styled.div`
  width: 95.2%;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 

  > p {
    width: 100%;
    padding: 2.4rem;
    border-radius: 1rem;
    box-shadow:  10px 10px 15px rgba(15, 4, 3, 0.2);
    background: ${({theme }) => theme.COLORS.ROSE_BACKGROUND};
    font-size: 6.5rem;
  }
`