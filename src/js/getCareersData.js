import getData from "./apiConnection"
import {idCareerMapToData,careersData} from "./utilities"

let careersDataObj = [];
let careerYearsData = {}
let careerAmount = 0;



/*

Hay que cambiar la utilizacion de los datos hardcoded por la 
elaboracion de la data a partir de la base de datos. 
El código de abajo hace lo mencionado, pero aun 
hay buggs existentes al conectar con el frontend. Es por eso
que solo se está usando para obtener los años de las carreras
que si tenemos en ls bd.
*/


getData("curriculum").then(
    data => {
        data.forEach(careerObj => {
            let currCareerId = careerObj.id_career;
            let currCareerObject = idCareerMapToData[currCareerId];
            careersDataObj.push(currCareerObject)
            careerAmount+=1;
        
        });

        careersDataObj.forEach((item, index) => {
            let currentIdCareer = index+1;
           

            let currCareerYears = []
            getData("curriculum/"+currentIdCareer).then(curriculumObjs => {
                curriculumObjs.forEach( currObj => {
                    currCareerYears.push(currObj.year)
                });
                careerYearsData[index] = currCareerYears
                
            });       
        })
    }
)


/* 
   ToDo:
        No puedo acceder a los atributos del JSON (me retorna undefined) si no lo logro no tengo como obtener el id del curriculum de manera mas eficiente. 
        Peor caso: agregarlo como un atributo a algun otro JSON
*/



/* Rellenamos el resto de carreras con arreglos vacios */
for(let i = careerAmount; i<8; i++){
    careerYearsData[i] = []
}

export {careersData,careerYearsData} ;

