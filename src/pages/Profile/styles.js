import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header { 
    width: 100%;
    height: 14.4rem;

    display: flex;
    align-items: center;
    padding: 0 14.4rem;

    background: ${({theme }) => theme.COLORS.ROSE_BACKGROUND};
  }

`

export const Form = styled.form`
  max-width: 34rem;
  margin:  0 auto;

  > div:nth-child(4){
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin:  -9.8rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;


  > img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({theme }) => theme.COLORS.ROSE};


    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    position: absolute;
    bottom: .7rem;
    right: .7rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({theme }) => theme.COLORS.BACKGROUND_200};
    }
  }
  
`