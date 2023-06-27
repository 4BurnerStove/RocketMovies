import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

export const StyledScrollbars = styled(Scrollbars)`
  height: 100%;
  width: 100%;

  .track-vertical {
    background-color: #f0f0f0;
  }

  .thumb-vertical {
    background-color: #888888;
    border-radius: 5px;
  }
`;
