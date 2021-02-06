import React from 'react';


import {  Main } from './styles';

const Footer: React.FC = () => {
  return (
    <Main>
      <hr />
      <div className="developed-by">
        Desenvolvido por
        &nbsp;
        <a href="https://furlansolutions.com.br" target="_balnk">Furlan Solutions</a>
      </div>
      <div className="copyright">
        Christino Consultoria 2020 &copy; Todos os diretos reservados.
      </div>
      <div className="images-by">
        Imagens criadas por
        &nbsp;
        <a href="https://www.freepik.com/popular" target="_balnk">freepik</a>
      </div>
    </Main>
  );
};

export default Footer;
