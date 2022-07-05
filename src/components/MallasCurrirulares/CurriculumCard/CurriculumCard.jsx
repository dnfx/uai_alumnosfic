import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function CurriculumCard(props){
  /*
    COMPONENT
    Card individual para visualizar el contenido de cada una de las
    carreras.
    Props 
      Son solamente atributos (KEY) de un obj (JSON) que contiene
        - careerName: atributo nombre carrera
        - ImageSrc: atributo src. imagen
        - ImageAlt: atributo alt. imagen

  */


    const careerName = props.CareerName;
    const imageSrc = props.ImageSrc;
    const imgAlt = props.ImageAlt;


    return (
        <Card variant="outlined" sx={{ width: 350, height: 350}}>
          <CardActionArea sx={{ width: 350,height: 350}}>
            <CardMedia
              component="img"
              height="280"
              image= {imageSrc}
              alt= {imgAlt}
            />
            
              <CardContent style={{marginTop: '-6px',}}>
                <Typography gutterBottom variant="h6" component="div">
                  {careerName}
                </Typography>

              </CardContent>
            
          </CardActionArea>
        </Card>
      );
};


export default CurriculumCard;
