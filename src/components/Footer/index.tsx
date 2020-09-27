import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container, Text } from './styles';

const Footer: React.FC = () => (
  <Container>
    <hr />
    <Grid>
      <Row>
        <Col xs={12} sm={4}>
          <Text>
            Desenvolvido por
            &nbsp;
            <a href="https://furlansolutions.com.br" target="_balnk">Furlan Solutions</a>
          </Text>
        </Col>

        <Col xs={12} sm={4}>
          <Text>
            Christino Consultoria 2020 &copy; Todos os diretos reservados.
          </Text>
        </Col>

        <Col xs={12} sm={4}>
          <Text>
            Imagens criadas por
            &nbsp;
            <a href="https://www.freepik.com/popular" target="_balnk">freepik</a>
          </Text>
        </Col>
      </Row>
    </Grid>
  </Container>
);

export { Footer };
