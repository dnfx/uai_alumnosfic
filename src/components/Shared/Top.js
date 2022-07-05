import React from "react";

const Top = () =>{
    return(
        <>
        <div className="d-none d-md-block p-1 bg-uai"></div>
        <div className="p-1 bg-dark">
            <div className="d-flex">
                <a className="d-none d-md-block text-light ms-5 mt-1 fs-6 text-decoration-none" href="https://alumno.uai.cl/">Estudiantes</a>
                <a className="d-none d-md-block text-light m-1 ms-4 text-decoration-none" href="https://www.uai.cl/alumni/">Alumni</a>
                <a className="d-none d-md-block text-light m-1 ms-4 text-decoration-none" href="https://www.uai.cl/academicos-e-investigacion/investigacion/">Academicos</a>
                <a className="d-none d-md-block text-light m-1 ms-4 text-decoration-none" href="https://www.uai.cl/rrii/">Internacional</a>
                <a className="d-none d-md-block text-light m-1 ms-4 text-decoration-none" href="https://bibliotecas.uai.cl/">Bibliotecas</a>
                <a className="d-none d-md-block text-light m-1 ms-4 text-decoration-none" href="https://admision.uai.cl/uai-en-360/">UAI en 360º</a>
            </div>
        </div>
        <div className="d-none d-xl-block p-3 bg-dark">
            <img className="m-4 img-header" src="https://www.uai.cl/assets/themes/uai-central/img/logo.svg" alt="Universidad Adolfo Ibáñez"></img>

        </div>
        
        
        </>
    )
}

export default Top