import styled from 'styled-components'

export const ScrollCustom = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 2px;
  }
`