import styled from 'styled-components';

export const Main = styled.footer`
  hr {
    grid-area: HR;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, .25);
    margin: 30px 0;
  }

  main {
    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 'CP' 'DB' 'IB';

    @media (min-width:600px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 'CP CP' 'DB IB';
    }

    @media (min-width:801px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'DB CP IB';
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      &.developed-by {
        grid-area: DB;
        order: 1;
      }

      &.copyright {
        grid-area: CP;
      }

      &.images-by {
        grid-area: IB;
        order: 3;
      }
    }
  }
`;