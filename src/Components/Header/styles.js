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

  .input {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    ul:hover, li:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200}
    }
    
    li, ul {
        transition: background-color 400ms;
     }

    ul {
      width: 100%;
      position: absolute;
      margin-top: 5.8rem;
      border-radius: 2rem;
      padding-inline: 1.2rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    }
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