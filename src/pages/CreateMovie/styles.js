import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    'header'
    'content'
    ;

    > main { 
      width: 75%;
      margin: 0 auto;
      grid-area: content;
      overflow-y: hidden;

      header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 4rem;

        h1 {
          margin-block: 2.4rem;
        }
      }
    }
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;

  > div {
    display: flex;
    gap: 4rem;

    input { 
      font-family: 'Roboto', sans-serif;
    }
  }

  > button:nth-child(1){
    background-color: ${({theme }) => theme.COLORS.ROSE}
   }

  textarea {
      margin-block: 4rem;
    }
`

export const Tag = styled.div`
  width: 100%;
  
  display: flex;
  gap: 2.4rem;
  padding: 1.8rem;
  background-color: ${({theme }) => theme.COLORS.
  BACKGROUND_100};

  border-radius: .8rem;
  margin-block: 2.4rem;
`
