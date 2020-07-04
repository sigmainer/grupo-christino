import { Grid, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import { Card, CardBody } from '~/components/Card';

export const Container = styled(Grid)`
  margin-top: 20px;
  min-height: calc(100% - 140px);

  #slogan {
    margin: 50px 0;
  }

  ${Col} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .servicos {
    ${Card} {
      margin: 30px;
      transition: transform .2s;
      pointer-events: none;
      animation: CardEntry .6s;

      cursor: pointer;

      ${CardBody} {
        pointer-events: auto;
      }

      :hover {
        transform: scale(1.05);
      }

      @keyframes CardEntry {
        0% {
          transform: scale(.95);
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
    }
  }
`;

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
