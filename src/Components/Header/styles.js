import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 11.2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 6.4rem;

  padding: 0 8rem;
  
  border-bottom: .2rem solid ${({ theme }) => theme.COLORS.GRAY_200};;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  > a:visited {
    color: ${({ theme }) => theme.COLORS.ROSE}
  }

  grid-area: header;
`

export const Profile = styled.div`
 font-size: 1.4rem;
 
 display: flex;
 align-items: center;
 
 gap: .9rem;

 a:visited {
  color: ${({ theme }) => theme.COLORS.WHITE};
 }

 > div {
    text-align: right;

    h2 {
      white-space: nowrap;
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      cursor: pointer;
      
    }
 }


  img { 
  width: 6.4rem;
  height: 6.4rem;

  border-radius: 50%;

 }
`