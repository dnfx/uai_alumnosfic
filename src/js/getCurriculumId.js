import {useEffect, useState} from 'react'
import getData from './apiConnection';

function useFetchIdCurriculum(idCareer, curriculumYear) {
    /*
        Fn. tipo Hook para obtener el id del curriculum a renderizar. 
        Utilizamos Hooks (lineas 16 a 18 useState y linea 
        25-37 useEffect)para manipular los datos y actualizarlos
        con la funcion async getData (en "./apiConnection.js")
        
        A getData() hay que entregarle el endPoint que queremos de
        la API como parametro (reviasr su definicion), en este 
        caso es:
            "apiUrl/curriculum/:idCareer/:idCurriculum"

            - idCareer: id de la carrera seleccionada
            - curriculumYear: año de la carrera seleccinada
                ---Obtenemos el idCurriculum en getIdCurriculum()---
        
    */

    
    const [idCurriculumHook, setIdCurriculum] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const correctedIdCareer = parseInt(idCareer)+1
    const endPoint = "curriculum/"+ correctedIdCareer ;
    


    useEffect(()=> {
        setLoading(true)
        getData(endPoint).then((response) => { 
            const idCurriculumVar = getIdCurriculum(response, curriculumYear)
            
            setIdCurriculum(idCurriculumVar)

            }).catch((err) => setError(err)).finally(() => {
                setLoading(false);
            });


    }, [endPoint, curriculumYear])

    return {
        loading,
        idCurriculumHook,
        error
    }
}


function getIdCurriculum(data, curriculumYear){
    /*
        Fn para obtener el id del curriculum que necesitamos
        Funcionamiento:
            Iteramos sobre el [JSON] obtenido desde getData(url) 
            y comparamos con el año seleccionado en el fronEnd.
            Una vez que encontramos el que queremos, lo 
            retornamos.
        
        Params:
            - data: data formato array con JSON adentro. 
                DEBE SEGUIR FORMATO DE ENDPOINT "/curriculum/:idCareer/:idCurriculum"
            - curriculumYear: año del curriculum que queremos obtener el id. 
            
    */
    let idCurriculum = null;

    data.forEach(item => {
        if(parseInt(curriculumYear) === item.year){
            idCurriculum = item.id_curriculum
        }
    })

    return idCurriculum

}

export default useFetchIdCurriculum