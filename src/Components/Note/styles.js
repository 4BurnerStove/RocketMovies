import styled from 'styled-components'
import { FiStar } from 'react-icons/fi'


export const Container = styled.button`
width: 100%;
background-color: ${({theme }) => theme.COLORS.ROSE_BACKGROUND};

border: none;
border-radius: 1rem;

padding: 3.2rem;
margin-bottom: 1.6rem;


p {
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 1.6rem;
  font-weight: 300;
  text-align: left;
}


> div {
  display: flex;
  flex-direction: column;

   h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

}


> footer {
  width: 100%;
  display: flex;
  margin-top: 2.4rem;
}

`
export const ContainerStar = styled.div`
  width: 100%;
  display: flex;

  > svg {
    stroke: ${({ theme }) => theme.COLORS.ROSE };;

  }
`

export const RatingStar = styled(FiStar)`
  fill: ${({ theme, active }) => (active ? theme.COLORS.ROSE : 'none')};
`