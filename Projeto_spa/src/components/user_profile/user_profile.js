// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/avatar.png';

export const userInfo = {
  name: 'José Silva',
  description: 'Desenvolvedor Web',
  age: 19
};

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5>{userInfo.name}</h5>
        <h5>{userInfo.age}</h5>
        <p className="red lighten-3 white-text">{userInfo.description}</p>
      </Row>
  </Card>
);

export default UserProfile;