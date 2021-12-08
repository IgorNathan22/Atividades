// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contato</h5>
        <Card>
          <Row>
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input type="text" id="name" label="Nome" class="validate"/>
                <label for="name">Nome</label>
              </div>
              <div class="input-field col s6">
                <input type="email" id="email" label="Email" class="validate"/>
                <label for="email">Email</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <textarea id="mensagem" class="materialize-textarea"></textarea>
                <label for="mensagem">Mensagem</label>
              </div>
            </div>
          </form>
          
            <Col s={12} m={12}>
              <Button waves='light' className="right #e57373 red lighten-2">Enviar</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;