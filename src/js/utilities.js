function getCareerNames(careersData) {
    /*
        Fn. para obtener los nombres, id y shortName de las carreras
        Esto se hace para tener los datos en un formato mas manipulable
        al momento de renderizar.
        Parametros:
            - careersData: datos de las carreras
    */
    const careerNames = []
    careersData.forEach(item => {
        careerNames.push({"name": item.careerName,  "id": item.id, "shortName" : item.shortName} )
    })

    return careerNames;
};



const idCareerMapToData = {

     /*
    Variable careersData:
        Es una solucion temporal debido a que aun no tenemos
        todos los datos en la db.
        Por ejemplo:
            - ImageSrc
            - ShortName
            - etc
        Cada key numerico es el id de la carrera (id_career cuando 
        hacemos el request a la API) y los value serían los atributos de cada carrera.

        Solución: deberiamos crear el arreglo careersData en 
        archivo fetchData.js (./fetchData.js), y este deberia 
        ser igual al objeto obtenido del get realizado con 
        getData("curriculum")

        OJO
        En careeersData, el id de cada una de las carreras 
        corresponde al index del arreglo.
*/

    1: {
        "shortName" : "Informatica",
        "careerName": "Ingeniería civil informatica",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/informatica-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing. Informatica"
    },
    2 : {
        "shortName" : "Industrial",
        "careerName": "Ingeniería civil Industrial",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/industrial-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing. Industrial"
    },
    3 : {
        "shortName" : "  en Minas  ",
        "careerName": "Ingeniería civil en Minas",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/08/ingenieria-en-minas-v3-320x260-c-default.jpg",
        "ImageAlt" : "Ing. en Minas"
    },
    4: {
        "shortName" : "Obras Civiles",
        "careerName": "Ingeniería civil",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/obras-civiles-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing. civil"
    },
    5: {
        "shortName" : "Bioingeniería",
        "careerName": "Ingeniería civil en Bioingeniería",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/bioingenieriia-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing. en Bioingeniería"
    },
    6:{
        "shortName" : "Energía y Medioambiente",
        "careerName": "Ingeniería civil en Energía y Medioambiente",
        "ImageSrc" : "https://mundoingenieros.cl/wp-content/uploads/2020/12/nueva-carrera.jpg",
        "ImageAlt" : "Ing. en Energía y Medioambiente"
    },
    7:{
        "shortName" : "   Energía   ",
        "careerName": "Ingeniería civil en Energía",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/08/foto-energa-y-ma-e1542827095414-320x260-c-default.jpg",
        "ImageAlt" : "Ing. en Energía"
    },
    8: {
        "shortName" : " Mecánica ",
        "careerName": "Ingeniería civil  Mecánica",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/mecaanica-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing.  Mecánica"
    }
} 


const careersData = [
    /*
    Variable careersData:
        Es una solucion temporal debido a que aun no tenemos
        todos los datos en la db.
        Por ejemplo:
            - ImageSrc
            - ShortName
            - etc
        
        Solución: deberiamos crear el arreglo careersData en 
        archivo fetchData.js (./fetchData.js), y este deberia 
        ser igual al objeto obtenido del get realizado con 
        getData("curriculum")
*/


    {
        "id" : 0,
        "shortName" : "Industrial",
        "careerName": "Ingeniería civil Industrial",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/industrial-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing. Industrial"
    },
    {   
        "id" : 1,
        "shortName" : "Informatica",
        "careerName": "Ingeniería civil informatica",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/informatica-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing. Informatica"
    },
    {
        "id" : 2,
        "shortName" : "  en Minas  ",
        "careerName": "Ingeniería civil en Minas",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/08/ingenieria-en-minas-v3-320x260-c-default.jpg",
        "ImageAlt" : "Ing. en Minas"
    },
    {
        "id" : 3,
        "shortName" : "Obras Civiles",
        "careerName": "Ingeniería civil",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/obras-civiles-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing. civil"

    },
    {
        "id" : 4,
        "shortName" : "Bioingeniería",
        "careerName": "Ingeniería civil en Bioingeniería",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/bioingenieriia-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing. en Bioingeniería"
    },

    {
        "id" : 5,
        "shortName" : "Energía y Medioambiente",
        "careerName": "Ingeniería civil en Energía y Medioambiente",
        "ImageSrc" : "https://mundoingenieros.cl/wp-content/uploads/2020/12/nueva-carrera.jpg",
        "ImageAlt" : "Ing. en Energía y Medioambiente"
    },
    {
        "id" : 6,
        "shortName" : "   Energía   ",

        "careerName": "Ingeniería civil en Energía",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/08/foto-energa-y-ma-e1542827095414-320x260-c-default.jpg",
        "ImageAlt" : "Ing. en Energía"
    },
    {
        "id" : 7,
        "shortName" : " Mecánica ",
        "careerName": "Ingeniería civil  Mecánica",
        "ImageSrc" : "https://ingenieria.uai.cl/assets/uploads/2019/11/mecaanica-2020-web-320x260-c-default.jpg",
        "ImageAlt" : "Ing.  Mecánica"
    }];

export {getCareerNames, idCareerMapToData, careersData};
