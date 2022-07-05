import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Semesters(props) {

    /*
        Componente que muestra los semestres del curriculum.
        El usuario selecciona el semestre y arrojamos los 
        cursos de este.
    */

    function handleClick (event) {
        props.updateClick(true)
        props.updateSelectedSemester(event.target.id)
    };


    const [width, setWidth] = useState(window.innerWidth);
   
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);

    return (
        <Grid container spacing={1} className = "p-4">
            {props.dictationSemesters.map((semester, index) => {
                return (
                    <Grid item xs={6} md={1.5} >
                        <Button style = {width > 900 ? {minWidth:"8vw", maxWidth: "25vw"} : {width: "30vw"}} size="lg" variant={!(semester === props.currentSemester) ? "outlined" : "contained"}  id = {semester} onClick={handleClick}>
                            {index + 1}
                        </Button>
                    </Grid>)
            })}
        </Grid>
  )
}

export default Semesters