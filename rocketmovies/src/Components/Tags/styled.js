import styled from 'styled-components'

export const Container = styled.span`

  padding: .5rem 1.2rem;
  font-size: 1.2rem;
  border-radius: .8rem;
  margin-right: .6rem;

  color: ${({theme }) => theme.COLORS.WHITE};
  background: ${({theme }) => theme.COLORS.BACKGROUND_300}

  
`