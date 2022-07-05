import React from "react";
import pregrado_logo from "../Home/santiago.jpg";

const Home = () =>{
    return(        
        <div className="container">
            <div className="row">    
                <div class="card mb-3 shadow-lg col-12 position-relative">
                    <img src={pregrado_logo} class="card-img-top mt-2 border border-1" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title fs-2">Pregrado</h5>
                        <p class="card-text"></p>
                        <a href="/CoordinacionPregrado" className="btn btn-info text-light">Ir al Sitio</a>
                    </div>
                 </div>
                 </div>
        </div>

    )
}

export default Home