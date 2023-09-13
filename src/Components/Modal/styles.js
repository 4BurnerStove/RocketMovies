import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1;
background-color: rgba(0, 0, 0, 0.7);
`

export const Content = styled.div`
  width: 100%;
  height: 100rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: initial;
`

export const ModalPart = styled.div`
  padding: 2.4rem 6rem;
  font-size: 2.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background:  ${({theme }) => theme.COLORS.BACKGROUND_100};

  > div {
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: right;
  }
`

export const Confirm = styled.button`
  font-size: 1.6rem;
  color:  ${({theme }) => theme.COLORS.WHITE};
  background-color: transparent;
  border: none;
`