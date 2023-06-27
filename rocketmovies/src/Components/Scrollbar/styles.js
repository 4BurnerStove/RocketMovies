import styled from 'styled-components'


export const StyledScrollbars = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: .8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme }) => theme.COLORS.ROSE};
    border-radius: .5rem;
    height: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: none;    
  }
`;
