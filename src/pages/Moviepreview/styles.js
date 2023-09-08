import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 4rem;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;

  > p { 
    text-align: center;
    font-size: 1.6rem;
  }
`