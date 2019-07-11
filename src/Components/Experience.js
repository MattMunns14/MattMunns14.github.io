import React from 'react';
import Typography from '@material-ui/core/Typography';



function Experience(props){

    return(
      <div>
        <div className = 'anotherHeader'>
          <Typography variant="h6" c gutterBottom>
            {props.title}
          </Typography> 
        </div>
                    
        <Typography varaint="subtitle1" color='textSecondary' gutterBottom>
          {props.name}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {props.description}
        </Typography>
      </div>
    )
  
}

export default Experience;