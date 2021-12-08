// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre mim</h5>
        <Card>
          <div>
            <p><b>Descrição</b></p>
            <p>Estudante de tecnologia desde os 13 anos, especialista em desenvolvimento web front-end com o framework ReactJs. <br/>Atualmente trabalhando freelancer com as tecnologias de ReactJs, Materialize, e jQuery.</p>
            <br/>
            <a className="black-text" href="https:github.com/IgorNathan22"><i class="small   material-icons">add_box</i> Portifólio e projetos ativos</a>
          </div>
        </Card>
        <h5 className="subtitle">Experiência</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="ReactJs Developer"
                    company="Facebook"
                    description="Integrou a equipe de desenvolvimento front-end do Facebook atuando em principais mudanças."
                    period="2018 - 2020"
                    avatar={company_avatar}
        />
        <Experience title="JavaScript Developer"
                    company="Minor Company"
                    description="Integrou equipe de desenvolvimento realizando tarefas para auxiliar a criação de sites responsivos."
                    period="2016 - 2018"
                    avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;