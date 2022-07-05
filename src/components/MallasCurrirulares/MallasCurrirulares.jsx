import React, {useState} from "react";
import {careersData, careerYearsData} from "../../js/getCareersData"
import {getCareerNames} from "../../js/utilities"
import DataContainerComponent from "./DataContainerComponent";
import SearchBar from "./SearchBar/searchBar";


function MallasCurrirulares(){
    /*
        DOCUMENTACION POR HACER
    */
    const [idSelectedCareer, setIdSelectedCareer] = useState(0);
    const [yearSelected, setYearSelected] = useState("Not selected")
    const [isClicked, setIsClicked] = useState(false);

    function handleSearchClick(){
        setIsClicked(true);
    }
    
    const careerNames = getCareerNames(careersData)


    return (
        <div className="container" align="center">
        
            <div className="container pt-5">
            
                <SearchBar 
                    NamesInfo = {careerNames}
                    careerYearsData = {careerYearsData}
                    updateIdSelectedCareer = {setIdSelectedCareer}
                    updateYearSelected = {setYearSelected}
                    currentIdCareer = {idSelectedCareer}
                    currentYearSelected = {yearSelected}
                    HandleSearchClick = {handleSearchClick}
                />
            </div>
            

            <DataContainerComponent 
                isClickedVal = {isClicked}
                careersData = {careersData}
                careerId = {idSelectedCareer}
                idCareerYear = {yearSelected}
            />

        </div>
    )

};

export default MallasCurrirulares;