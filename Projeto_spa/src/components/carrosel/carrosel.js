// Importando o React
import React from "react";  
// Importando os components necessários da lib react-materialize
import { Carousel } from 'react-materialize';

import avatar from '../../images/avatar.png';

function Carrosel(){
    return(
        <Carousel
        className="black-text center"
        options={{
            fullWidth: true,
            numVisible: 2
        }}
        >
        <div className="container">
            <div class="row">
                <div class="col s2">
                    <img src={avatar} className="circle responsive-img" />
                </div>
                <div class="col s10">
                    <h2>
                        Artigos escritos
                    </h2>
                    <br/>
                    <p>
                        3
                    </p>    
                </div>
            </div>
        </div>
        <div>
                <h2>
                    Principais temas
                </h2>
                <br/>
                <p><b>ReactJS</b></p>
            
        </div>
        </Carousel>
    );
}

export default Carrosel;