import React from 'react';

import { Button } from '~/components/Button';
import { Card, CardBody } from '~/components/Card';

import { AboutUs, Presentation } from './styles';

const Index: React.FC = () => (
  <main>
    <Presentation>
      <div className="texto-apresentacao">
        <button>ABRA SUA EMPRESA</button>
        <Button>JA TENHO UMA</Button>
      </div>
      <div className="img-apresentacao">
        <img src="images/landing-presentation.svg" alt="presentation" />
      </div>
    </Presentation>
    <AboutUs>
      <Card className="contabil">
        <CardBody>
          <img src="images/contabil.svg" alt="presentation" />
          CONTABILIDADE
        </CardBody>
      </Card>
      <Card className="fiscal">
        <CardBody>
          <img src="images/fiscal.svg" alt="presentation" />
          FISCAL
        </CardBody>
      </Card>
      <Card className="dp">
        <CardBody>
          <img src="images/dp.svg" alt="presentation" />
          DEPARTAMENTO PESSOAL
        </CardBody>
      </Card>
      <Card className="mei">
        <CardBody>
          <img src="images/mei.svg" alt="presentation" />
          MEI
        </CardBody>
      </Card>
    </AboutUs>
  </main>
);

export default Index;
