import { Grid, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Text from '~/components/Text';

export const Container = styled(Grid)`
  margin-top: 20px;
  min-height: calc(100% - 140px);

  ${Text}.title {
    margin-bottom: 20px;
  }

  #slogan {
    margin: 50px 0;
  }

  ${Col} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

/*
@media (max-width: ${theme.flexboxgrid.breakpoints.sm}em) {
  margin: 0 -${theme.flexboxgrid.outerMargin}rem;
  padding: 5px ${theme.flexboxgrid.outerMargin}rem;
  color: ${theme.colors.primaryText};
  background: ${theme.colors.primary};
}
*/

export const TextContainer = styled.div`
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 100%;
  animation: entry .4s;

  img {
    width: 100%;
  }

  @keyframes entry {
    0% {
      transform: scale(.99);
      opacity: 0;
    }
    50% {
      transform: scale(1.01);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
