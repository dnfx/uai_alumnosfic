import CardsContainer from "./CurriculumCard/CardsContainer";
import Malla from "./Mallas/Malla"
import React from "react";
import getCurriculumId from "../../js/getCurriculumId"


function CardContainerComponent(props){

    /*
            Fn. para retoranar las carreras disponibles si 
        aun no se selec. el curriculum deseado y retornar el urriculum en caso de que este este seleccionado y sea
        una opcion valida dada la BDD.
            Cuando se presiona buscar cambiamos el valor bool de
        isClickedVal (prop igual a isClicked) para indicar que se
        solicito la busqueda.
            Si isClickedVal === true, se evalua el estado del hook
        laoding definido y actualizado dentro de getCurriculum().
        Lo anterior se hace debido a la utilizacion de una funcion
        async dentro de getCurriculum() y, asi podemos renderizar 
        "loading" mientras esperamos la respuesta del get a la API
        
            Props
                - isClickedVal: indica si se buscó, sirve para 
                saber que renderizar (si un curriculum o las carreras)
                - careersData: data de las carreras (revisar ../../../js/fetchData.js)
                - careerId: id carrera seleccionada
                - careerYear: año de la carrera seleccionada 
    */


    const curriculumResponseObj = getCurriculumId(props.careerId, props.idCareerYear) ;

    if(!props.isClickedVal){
       return (
           <div>
                    <CardsContainer 
                        CareersData = {props.careersData}
                    />
                </div>
            )
        } else if(props.isClickedVal) { 
            const idCurriculum = curriculumResponseObj["idCurriculumHook"]
            
            if (curriculumResponseObj["loading"]) return (
                <div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                        <h1>LOADING ...</h1>
                    </div>
                </div>
            ); else if (!idCurriculum && !curriculumResponseObj["idCurriculumHook"]) {

                return (<div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                        <h1>Selecciones opciones validas</h1>
                    </div>
                </div>)
            } else{
                return (
                    <div>
                        <Malla 
                            careerId = {parseInt(props.careerId)+1}
                            curriculumId = {idCurriculum}
                        />
                    </div>
                )
            }
        }

    };

export default CardContainerComponent;
