import React from "react";
import CurriculumCard from "./CurriculumCard";

function CardsContainer(props){
    /*
        Container que renderiza todas las especialidades de ingenieria disponibles en la universidad. 
        Iteramos sobre arreglo CareersData para renderizar c/u
            Props
                - CareersData: arreglo con JSON de cada carrera.
                    OJO -> el index corresponde al id - 1 (hay que manejarlo mejor con la bd)

                Atributos de JSON en c/index del arreglo CareersData
                    - careerName: atributo nombre carrera
                    - ImageSrc: atributo src. imagen
                    - ImageAlt: atributo alt. imagen
    */

    const careersData = props.CareersData;

    return (
        
        <div className="container pb-5">
                <div class="row">
                    {careersData.map((item, index) => {
                        
                        return (
                            <div className="col-sm pt-5">
                                <CurriculumCard
                                    CareerName = {item.careerName}
                                    ImageSrc = {item.ImageSrc}
                                    ImageAlt = {item.ImageAlt}
                                />
                            </div>
                        )
                    })
                    }
                </div>
        </div>
        
    )
};

export default CardsContainer;