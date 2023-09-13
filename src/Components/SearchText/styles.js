import styled from "styled-components";

export const Container = styled.li`
  list-style: none;
  cursor: pointer;
  padding-block: .4rem;
  width: 100%;
  border-bottom: ${({ theme }) => theme.COLORS.BACKGROUND_100} solid 1px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

`