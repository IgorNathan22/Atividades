// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Col, Card, CardTitle, Button, Icon } from 'react-materialize';

import logo from '../../images/reactjs.png';

function Article(props){
    return(
        <Col>
            <Card closeIcon={<Icon>close</Icon>} 
                reveal={props.info} 
                revealIcon={<Icon>more_vert</Icon>} 
                header={<CardTitle image={logo}></CardTitle>}
                horizontal
                title={props.title}>
                <br/>
                <p>{props.description}</p>
            </Card>
        </Col>
    );
}

export default Article;