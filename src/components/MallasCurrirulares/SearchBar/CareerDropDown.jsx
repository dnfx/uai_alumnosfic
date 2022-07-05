import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown'



function CareerDropDown(props){

    const [currentCareer, setCareer] = useState("Seleccionar Carrera");

    function updateCareer(event){
        props.setIdCareer(event.target.id)
        setCareer(event.target.name)
    };

    const careerNames = props.Careers;

    return (
        
        <Dropdown className="d-inline m-2 col-md" autoClose="outside">
            <Dropdown.Toggle className="m-1" size="lg" id="dropdown-autoclose-true">
                {currentCareer}
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                {careerNames.map(item => {
                    return (
                        <Dropdown.Item id={item.id} name={item.shortName} onClick ={updateCareer}> {item.name} </Dropdown.Item>
                    )}
                )}
            </Dropdown.Menu>
      </Dropdown>
    )
};


export default CareerDropDown;
