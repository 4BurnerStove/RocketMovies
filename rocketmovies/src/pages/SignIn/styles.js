 
import styled from 'styled-components'
import backgroundImg from '../../Assets/backgroundImg.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center; 

  background-color: ${({theme }) => theme.COLORS.BACKGROUND_200};


  h1, p, h2 {
    text-align: left;
  }

  > h1 {
    font-size: 4.8rem;
    color: ${({theme }) => theme.COLORS.ROSE}
  }

  > p {
   text-align: left;
   color: ${({theme }) => theme.COLORS.GRAY_100}
 }
  > h2 {
    font-size: 2.4rem;
    margin-block: 4.8rem;
  }

  button {
    margin-block: 2.4rem;
  }

`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`