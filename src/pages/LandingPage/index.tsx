import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Card, CardBody } from '~/components/Card';
import Text from '~/components/Text';

import useWindowSize from '~/utils/useWindowSize';

import { Presentation, ServicosContainer, TextContainer, ImgContainer } from './styles';

const Index: React.FC = () => {
  const windowSize = useWindowSize();

  return (
    <>
      <Presentation>
        <Row>
          <Col xs={12} sm={12} md={8}>
            <TextContainer>
              <Text size={22} entryAnimation center asTitle>
                QUEM SOMOS
              </Text>

              <Text size={20} entryAnimation center>
                Somos a Christino Consultoria, empresa especializada em Serviços Contábeis, de Despachante e de Seguros.
                Com atuação a mais de 20 anos no mercado, angariamos o reconhecimento do mercado em trazer soluções a
                nossos clientes.
              </Text>

              <Text size={24} entryAnimation fontFamily="Yellowtail" center id="slogan">
                NINGUEM CRESCE POR ACASO
              </Text>
            </TextContainer>
          </Col>

          {windowSize.hideOn('sm') && (
            <Col xs={false} sm={4}>
              <ImgContainer>
                <img src="assets/contabilidade1.svg" alt="" />
              </ImgContainer>
            </Col>
          )}
        </Row>
      </Presentation>

      <ServicosContainer>
        <Grid>
          <Row className="servicos">
            <Col xs={12} sm={4}>
              <Card>
                <CardBody>
                  <ImgContainer>
                    <img src="assets/contabilidade.svg" alt="" />
                  </ImgContainer>
                  <Text size={18} center bold>CONTABILIDADE</Text>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} sm={4}>
              <Card>
                <CardBody>
                  <ImgContainer>
                    <img src="assets/despachante2.svg" alt="" />
                  </ImgContainer>
                  <Text size={18} center bold>DESPACHANTE</Text>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} sm={4}>
              <Card>
                <CardBody>
                  <ImgContainer>
                    <img src="assets/seguro1.svg" alt="" />
                  </ImgContainer>
                  <Text size={18} center bold>SEGUROS</Text>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Grid>
      </ServicosContainer>

      <Grid>
        <Row>
          {windowSize.hideOn('sm') && (
            <Col xs={false} sm={4}>
              <ImgContainer>
                <img src="assets/deal.svg" alt="" />
              </ImgContainer>
            </Col>
          )}

          <Col xs={12} sm={12} md={8}>
            <TextContainer>
              <Text size={22} entryAnimation center asTitle>
                NOS IMPORTAMOS
              </Text>

              <Text size={18} entryAnimation center>
                Temos o propósito de trazer facilidades aos nossos clientes, sempre levando muita informação e
                facilitando o dia a dia do empresário, através de um excelente planejamento claro e estratégico,
                deixando-os disponíveis para focar no dia a dia de seu empreendimento.
              </Text>
              <Text size={18} entryAnimation center>
                Apresentamos soluções contábeis para cada tipo de cliente, sempre observando as peculiaridades
                individuais de cada segmento, bem como serviços de Despachante e de Seguros, que atendam a todas as
                necessidades de nossos clientes, para que assim possam ter tempo mais livre para se dedicar as suas
                atividades empresariais.
              </Text>
            </TextContainer>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={8}>
            <TextContainer>
              <Text size={22} entryAnimation center asTitle>
                NOSSO OBJETIVO
              </Text>

              <Text size={18} entryAnimation center>
                Trazer soluções ao empresário com ética, transparência e responsabilidade, para que o mesmo possa se
                dedicar com tranquilidade as suas atividades operacionais, auxiliando em seu crescimento.
              </Text>
              <Text size={18} entryAnimation center>
                Prestar serviços de excelência, com cumprimentos de todos os prazos, atendendo os requisitos legais,
                proporcionando serviços cm qualidade e melhorias contínuas, buscando atingir a plena satisfação do
                cliente.
              </Text>
            </TextContainer>
          </Col>

          {windowSize.hideOn('sm') && (
            <Col xs={false} sm={4}>
              <ImgContainer>
                <img src="assets/objetivo.svg" alt="" />
              </ImgContainer>
            </Col>
          )}
        </Row>

        <Row>
          <Col xs={12} sm={6}>
            <TextContainer>
              <Text size={22} entryAnimation center asTitle>
                ONDE ESTAMOS
              </Text>

              <Text size={18} entryAnimation center>
                R. Dr. Ataliba Leonel, 847 - Taquarituba - SP
                <br />
                de Segunda a Sexta das 08:30 as 17:30
              </Text>
            </TextContainer>
          </Col>
          <Col xs={12} sm={6}>
            <TextContainer>
              <Text size={22} entryAnimation center asTitle>
                ENTRE EM CONTATO
              </Text>

              <Text size={18} entryAnimation center>
                contato@christinoconsultoria.com.br
                <br />
                (14) 3762-1990 / (14) 3762-1991
              </Text>
            </TextContainer>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Index;
