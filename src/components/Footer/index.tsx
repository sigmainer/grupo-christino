import React from 'react';


import {  Main } from './styles';

const Footer: React.FC = () => {
  return (
    <Main>
      <hr />
      <main>
        <div className="developed-by">
          Desenvolvido por
          &nbsp;
          <a href="https://furlansolutions.com.br" target="_balnk">Furlan Solutions</a>
        </div>
        <div className="copyright">
          Christino 2020 &copy; Todos os diretos reservados.
        </div>
        <div className="images-by">
          Imagens criadas por
          &nbsp;
          <a href="https://www.freepik.com/popular" target="_balnk">freepik</a>
        </div>
      </main>
    </Main>
  );
};

export default Footer;
