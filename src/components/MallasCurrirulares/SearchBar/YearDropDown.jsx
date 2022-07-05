import React, {useState}from "react";
import Dropdown from 'react-bootstrap/Dropdown'

function YearDropDown(props){

    const [selectedYear, setSelectedYear] = useState("Seleccionar Año");
    const careerYears = props.careerYears;

    function updateSelectedYear(event){
        props.setYear(event.target.id)
        setSelectedYear(event.target.id)
    }
    
    return (

        <Dropdown  className="d-inline m-2" autoClose="outside">
            <Dropdown.Toggle className="m-1" size="lg" id="dropdown-autoclose-inside" >
                {selectedYear}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            
                {careerYears.map((item) => {
                    return (
                        <Dropdown.Item id={item} onClick={updateSelectedYear}>{item}</Dropdown.Item>
                    )}
                )}
                    
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default YearDropDown;
