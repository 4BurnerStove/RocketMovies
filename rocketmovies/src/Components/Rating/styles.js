import styled from 'styled-components'
import { FiStar } from 'react-icons/fi'


export const Container = styled.div`
  width: 100%;
  display: flex;

  > svg {
    stroke: ${({ theme }) => theme.COLORS.ROSE };;
  
  }
`

export const RatingStar = styled(FiStar)`
  fill: ${({ theme, active }) => (active ? theme.COLORS.ROSE : 'none')};
`