// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';
import Article from "../article/article";
import Carrosel from "../carrosel/carrosel";

const article = {
    title: "React JS",
    description: "Estudo sobre os conceitos básicos de ReactJS",
    info: "O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros."
};

const Blog = () => (
    <>
        <Row>
            <Carrosel></Carrosel>
        </Row>
        <Row>
            <Col s={4}>
                <Article title={article.title} description={article.description} info={article.info}></Article>
            </Col>
            <Col s={4}>
                <Article title={article.title} description={article.description} info={article.info}></Article>
            </Col>
            <Col s={4}>
                <Article title={article.title} description={article.description} info={article.info}></Article>
            </Col>
        </Row>
    </>
);

export default Blog;