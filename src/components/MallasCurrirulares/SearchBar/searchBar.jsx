import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import YearDropDown from "./YearDropDown"
import CareerDropDown from "./CareerDropDown"
import Button from 'react-bootstrap/Button';




function SearchBar(props) {
    const careerNames = props.NamesInfo;
    const idSelectedCareer = props.currentIdCareer;   
    // console.log(props.careerYearsData[idSelectedCareer])
    
    return (
        <div className = "row" style={{width:"80%"}}>
            <Dropdown className="d-inline">
                    
                    <CareerDropDown
                        Careers = {careerNames}
                        setIdCareer = {props.updateIdSelectedCareer}
                    />

                    <YearDropDown
                        careerYears = {props.careerYearsData[idSelectedCareer]}
                        setYear = {props.updateYearSelected}
                    />

                    <Button onClick ={props.HandleSearchClick} className="col-md d-inline m-1" size="lg" variant="primary">
                        Buscar
                    </Button>
            </Dropdown>

        </div>
        
        
        
    )
};

export default SearchBar;
