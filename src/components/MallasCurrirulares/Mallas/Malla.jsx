import React, {useEffect, useState}from "react";
import getData from "../../../js/apiConnection"
import Semesters from "./Semesters"
import Courses from "./Courses"


function Malla(props){

    /*
        Componente malla que renderiza los numeros de los
        semestres y una vez seleccionado el semestre desado, renderiza los cursos del mismo.

    */

    
    const [curriculumData, setCurriculumData] = useState(null);
    const [clicked, setClicked] = useState(false)
    const [selectedDictationSemester, setDictationSemester] = useState(null);
    
    const endPoint = "curriculum/" + props.careerId + "/" + props.curriculumId;

    useEffect(() => {
        getData(endPoint).then( response => {
            setCurriculumData(response[0])
        })
    }, [endPoint])


    
    if (curriculumData){
        var dictationSemesters = Object.keys(curriculumData);
        const coursesArr = makeCoursesArr(curriculumData, dictationSemesters);

        
        return (
            <div>
            <Semesters 
                            dictationSemesters = {dictationSemesters}
                            clickedBool = {clicked}
                            updateClick = {setClicked}
                            updateSelectedSemester = {setDictationSemester}
                            currentSemester = {selectedDictationSemester}

            /> 
            {clicked && selectedDictationSemester ? 
                <Courses 
                    semesterData = {curriculumData[selectedDictationSemester]}
                    coursesArr = {coursesArr}

                /> :  <h1 className="p-5">Seleccione el semestre deseado</h1>}
            </div>
        )

    };
    
};


function makeCoursesArr(curriculumData, semestersKey){
    var fullCoursesArr = [];

    semestersKey.forEach(semester => {

        fullCoursesArr = fullCoursesArr.concat(curriculumData[semester])
    })
    return fullCoursesArr
}




export default Malla;