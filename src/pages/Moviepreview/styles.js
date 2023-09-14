import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 4rem;

  a:visited {
    color: ${({theme }) => theme.COLORS.WHITE}
  }

  > .navigate {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    
    p {
      padding: .8rem 2.6rem;
      background: ${({theme }) => theme.COLORS.BACKGROUND_100};
      border-radius: 1rem;
      border: 1px solid ${({theme }) => theme.COLORS.BACKGROUND_100};
    }
    
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;

  > p { 
    text-align: center;
    font-size: 1.6rem;
  }
`