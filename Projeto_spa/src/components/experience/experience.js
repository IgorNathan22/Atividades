// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

// Recebe os parâmetros passadados para o Componenet na variável props
const Experience = (props) => (
  <Card>
      <Row>
        <Col s={2} m={2}>
          <img src={props.avatar} className="circle responsive-img" />
          { props.name }
        </Col>

        <Col s={10} s={10}>
          <p><b>{props.title} in <span>{props.company}</span></b></p>
          <br/>
          <p>{props.description}</p>
        </Col>

        <Col s={10} s={10}>
          <br/>
          <p><span className="red lighten-4"><b>{props.period}</b></span></p>
        </Col>
      </Row>
  </Card>
);

export default Experience;