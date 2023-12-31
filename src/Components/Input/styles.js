import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300 };
  margin-bottom: .8rem;
  border-radius: 1rem;

  > input {
    padding: 1.8rem;

    width: 100%;
    height: 5.6rem;
    color: ${({theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    



    &::placeholder {
      color: ${({theme }) => theme.COLORS.GRAY_300};
    }    
  }

  > svg {
      margin-left: 1.2rem;
    }
`