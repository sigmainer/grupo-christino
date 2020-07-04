import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Text from '~/components/Text';

import { Container, TextContainer, ImgContainer } from './styles';

const Aboult: React.FC = () => {
  const randSbrImg = Math.floor(Math.random() * 2) + 1;
  const randNosImpImg = Math.floor(Math.random() * 2) + 1;

  return (
    <Container>
      <Row>
        <Col xs={12} sm={8}>
          <TextContainer>
            <Text size={22} entryAnimation center="xs" bold className="title">
              QUEM SOMOS
            </Text>

            <Text size={20} entryAnimation center="xs" id="sobre">
              Somos o Grupo Christino, empresa especializada em Serviços Contábeis, de Despachante e de Seguros. Com
              atuação a mais de 20 anos no mercado, angariamos o reconhecimento do mercado em trazer soluções a nossos
              clientes.
            </Text>

            <Text size={22} entryAnimation fontFamily="Dancing Script" center id="slogan">
              NINGUEM CRESCE POR ACASO
            </Text>
          </TextContainer>
        </Col>

        <Col xs={false} sm={4}>
          <ImgContainer>
            <img src={`assets/contabilidade${randSbrImg}.svg`} alt="" />
          </ImgContainer>
        </Col>
      </Row>

      <Row id="nosImportamos">
        <Col xs={false} sm={4}>
          <ImgContainer>
            <img src={`assets/despachante${randNosImpImg}.svg`} alt="" />
          </ImgContainer>
        </Col>

        <Col xs={12} sm={8}>
          <TextContainer>
            <Text size={22} entryAnimation center="xs" bold className="title">
              NÓS NOS IMPORTAMOS
            </Text>

            <Text size={18} entryAnimation center="xs">
              Temos o propósito de trazer facilidades aos nossos clientes, sempre levando muita informação e facilitando
              o dia a dia do empresário, através de um excelente planejamento claro e estratégico, deixando-os
              disponíveis para focar no dia a dia de seu empreendimento.
            </Text>
            <Text size={18} entryAnimation center="xs">
              Apresentamos soluções contábeis para cada tipo de cliente, sempre observando as peculiaridades individuais
              de cada segmento, bem como serviços de Despachante e de Seguros, que atendam a todas as necessidades de
              nossos clientes, para que assim possam ter tempo mais livre para se dedicar as suas atividades
              empresariais.
            </Text>
          </TextContainer>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={8}>
          <TextContainer>
            <Text size={22} entryAnimation center="xs" bold className="title">
              NOSSO OBJETIVO
            </Text>

            <Text size={18} entryAnimation center="xs">
              Trazer soluções ao empresário com ética, transparência e responsabilidade, para que o mesmo possa se
              dedicar com tranquilidade as suas atividades operacionais, auxiliando em seu crescimento.
            </Text>
            <Text size={18} entryAnimation center="xs">
              Prestar serviços de excelência, com cumprimentos de todos os prazos, atendendo os requisitos legais,
              proporcionando serviços cm qualidade e melhorias contínuas, buscando atingir a plena satisfação do
              cliente.
            </Text>
          </TextContainer>
        </Col>

        <Col xs={false} sm={4}>
          <ImgContainer>
            <img src="assets/objetivo.svg" alt="" />
          </ImgContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboult;
