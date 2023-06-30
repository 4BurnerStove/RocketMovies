import styled from 'styled-components'


export const Container = styled.textarea`
  width: 100%;
  height: 18rem;
  color: ${({theme }) => theme.COLORS.WHITE};
  background: ${({theme }) => theme.COLORS.BACKGROUND_300};

  resize: none;
  
  border: none;
  border-radius: .8rem;

  font-family: 'Roboto', sans-serif;
  
  padding: 1.9rem;
`