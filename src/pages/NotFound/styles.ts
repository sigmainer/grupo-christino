import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 10px;
  margin-bottom: 10px;

  height: calc(100% - 150px);

  div {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 400px;

      animation: entry .6s ;

      @keyframes entry {
        0% {
          transform: scale(.98);
          opacity: 0;
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
  }
`;
