import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Courses(props) {
    
    /*
        Component utilizado para mostrar un curso en formato card @mui
        Props: 
            - semesterData: Array de JSONs. Cada JSON corresponde a un 
                curso del semestre en cuestioón. 
                Atributos renderizados:
                    - initials 
                    - name
                    - credits
    */


    return (
        <Grid container spacing={4} className = "p-5">
            {props.semesterData.map(courseJSON => {

                return (
                    <Grid item xs={12} md={4} >
                        <Card sx={{height:170, maxWidth: 400}}>
                            

                                <CardContent style={{height : 130}}>
                                    <div style={{alignItems: "center"}}>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {courseJSON.initials}
                                        </Typography>
                                        <Typography component="div" style={{fontSize:16, fontWeight:"bold"}}>
                                            {courseJSON.name}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                                            Creditos: {courseJSON.credits}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <CardContent >
                                    
                                    <Typography  alignItems="left" style={{fontSize:13, color:"#E84545", fontWeight: "bold"}} >
                                        {courseJSON.prerequisites_id.length === 0 ? "Sin prerequisitos "  : getPrerequisites(courseJSON.prerequisites_id, props.coursesArr)}
                                    </Typography>
                                </CardContent>
                        </Card> 
                    </Grid>
                )
            })}
        </Grid>

  )
};

function getPrerequisites(prerequisites, coursesData){
    var prerequisitesRender = ""

    prerequisites.forEach(idCourse => {
        if(idCourse <= coursesData.length){
        prerequisitesRender = prerequisitesRender +" " + coursesData[idCourse-1].initials
    }
    })

    if (prerequisitesRender !== "") {return prerequisitesRender }else {
        return "Prerequisitos no encontrados"
    }
}

export default Courses