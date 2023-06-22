import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;

  
  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.9rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300 };
    color: ${({theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 1rem;


    &::placeholder {
      color: ${({theme }) => theme.COLORS.GRAY_300};
    }

    > svg {
      margin-left: 1.6rem;
    }
    
  }
`