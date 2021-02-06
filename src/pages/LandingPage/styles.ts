import styled from 'styled-components';
import { Card, CardBody } from '~/components/Card';

export const Presentation = styled.div`
  display: grid;


  grid-template-columns: 1fr;
  grid-template-areas: 'TP';

  @media (min-width:801px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'TP IP';
  }

  .texto-apresentacao {
    padding: 20px 0;
    @media (min-width:801px) { padding: 0; }

    grid-area: TP;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button:nth-child(1) {
      border: 2px solid ${({ theme }) => theme.primary.main};
      padding: 8px;
      border-radius: 10px;
      background: none;
      color: ${({ theme }) => theme.text};
      font-weight: bold;
      cursor: pointer;
      transition: all 250ms ease;
      font-size: 20px;

      :hover {
        background: ${({ theme }) => theme.primary.main};
        color: ${({ theme }) => theme.primary.contrastText};
      }
    }
  }

  .img-apresentacao {
    display: none;
    @media (min-width:801px) { display: block; }
    grid-area: IP;

    img {
      animation: ImageEntry 1s ease;

      @keyframes ImageEntry {
        0% { transform: scale(.95); opacity: 0; }
        50% { transform: scale(1.01); }
        100% { transform: scale(1); opacity: 1; }
      }
    }
  }
`;

export const AboutUs = styled.div`
  display: grid;

  grid-template-areas: 'CT' 'FC' 'DP' 'MI';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (min-width:600px) {
    grid-template-areas: 'CT FC' 'DP MI';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 30px;
  }

  @media (min-width:801px) {
    grid-template-areas: 'CT FC DP MI';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
  }

  ${Card} {
    transition: transform 250ms ease;
    cursor: pointer;

    :hover { transform: scale(1.05); }

    ${CardBody} {
      font-weight: 18px;
      text-align: center;
      font-weight: bold;
    }
  }

  .contabil { grid-area: CT; }
  .fiscal { grid-area: FC; }
  .dp { grid-area: DP; }
  .mei { grid-area: MI; }
`;