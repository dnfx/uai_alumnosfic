import React from "react";
import SideBarPregrado from "./SideBarPregrado";



const CoordinacionPregrado = () =>{
    return(
    <>
    
    <div className="d-flex">
        <SideBarPregrado/>
        <div className="card shadow-lg ms-3">
            <div className="card-body">
                <h1 className="card-title text-center">Coordinacion de Pregrado</h1>
                <div className="p-1 bg-uai w-25  position-absolute start-50 translate-middle"/>
                <div className="p-3"/>
                <p className="card-text text-start">La Dirección de Pregrado es la unidad que te acompañará y apoyará en las diversas actividades universitarias durante tus primeros cuatro años de estudio correspondientes a la Licenciatura. Su función es velar por una correcta coordinación entre las áreas de desarrollo curricular, desarrollo docente y asuntos estudiantiles.</p>
                <div className="p-2"/>
                <p className="card-text text-start">Es en el Pregrado donde los estudiantes de las distintas carreras se desarrollan tanto en cursos pertenecientes a su disciplina como en los cursos de Artes Liberales, que son comunes para todas las carreras ya que entregan una base muy importante para el posterior desempeño profesional en un mundo globalizado.</p>
                <div className="p-2"/>
                <p className="card-text text-start">Dirección de Pregrado – Santiago:</p>
                <ul>
                   <li>Director: Ignacio Contreras Espic</li> 
                   <li>Coordinador Ejecutivo de Pregrado: Bárbara Mellado</li>
                   <li>Secretaría Académica: Soledad Juacida</li>
                   <li>Dirección de Asuntos Estudiantiles: Loreto Campos</li>
                </ul>
                <div className="p-2"/>
                <p className="card-text text-start">Dirección de Pregrado – Viña del Mar:</p>
                <ul>
                    <li>Prorrector y Decano de Pregrado: Claudio Osorio</li>
                    <li>Secretaría Académica: Ariel Ochoa</li>
                    <li>Dirección de Asuntos Estudiantiles: Daniela Urrutia</li>
                </ul>
                <div className="p-2"/>
                <p className="card-text text-start">La Secretaría te ayudará con tus dudas y tramitación de los diferentes aspectos descritos en el Reglamento de Licenciaturas (justificación de inasistencias*, suspensiones, anulaciones, toma de ramos, etc.).</p>
                <div className="p-2"/>
                <p className="card-text text-start fw-bold">* En caso de padecer alguna enfermedad u otro impedimento grave para rendir una evaluación o para asistir a clases, los estudiantes deberán completar el formulario disponible para estos efectos en su Intranet y adjuntar los antecedentes (en los casos médicos, debe ser el certificado médico y el bono o boleta de atención) durante las 48 horas siguientes al término de la licencia médica o al cese del impedimento, en su caso, y debe ser entregado en Secretaría.</p>
            
            </div>
        </div>
    </div>
    </>
    )
}



export default CoordinacionPregrado;