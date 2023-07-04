import styled from 'styled-components'
import { FiStar } from 'react-icons/fi'

import { Tag } from '../Tags'

export const Container = styled.button`
width: 100%;
background-color: transparent;
cursor: unset;


border: none;
border-radius: 1rem;

padding-block: 3.2rem;
margin-bottom: 1.6rem;

> footer {
  width: 100%;
  display: flex;
  margin-top: 2.4rem;
}
`
export const ContainerStar = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  > svg {
    stroke: ${({ theme }) => theme.COLORS.ROSE };;
    
  }
`

export const Etags = styled(Tag)`
  color: ${({theme }) => theme.COLORS.WHITE};
  background: ${({theme }) => theme.COLORS.ROSE_BACKGROUND};
`

export const RatingStar = styled(FiStar)`
  width: 2rem;
  height: 2rem;
  fill: ${({ theme, active }) => (active ? theme.COLORS.ROSE : 'none')};
`

export const HeaderMovie = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;

   h1 {
    text-align: left;
    font-weight: 700;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Updated = styled.div` 
  display: flex;
  align-items: center;
  gap: .8rem;

  color: ${({theme }) => theme.COLORS.WHITE};
`

export const UpdatedAt = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  font-weight: 400;
`


export const User = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;


> img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`