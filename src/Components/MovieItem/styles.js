import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, $isnew }) => $isnew ? 'transparent' : theme.COLORS.BACKGROUND_200 };
  border-radius: .8rem;
  color: ${({theme}) => theme.COLORS.WHITE};
  border: ${({$isnew}) => $isnew ? '.2rem dashed #312E38'  : 'none'};
  

  > button {
    border: none;
    background: none;

    > svg {
      margin-right: 1rem;
    }
  }

  .button-delete {
    color: ${({theme}) => theme.COLORS.ROSE}
  }

  .button-add {
    color: ${({theme}) => theme.COLORS.ROSE}
  }
  
  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    
    color: ${({theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
    
    &::placeholder {
      color: ${({theme }) => theme.COLORS.GRAY_300};
    } 
  }

 
`