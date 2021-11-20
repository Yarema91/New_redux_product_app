// import React, {FC} from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { IProject } from '../../models/IProject';
// import { lineClamp } from '@tailwindcss/line-clamp';



// interface ProjectListItem {
//     project: IProject;
//     // update: (project: IProject) => void;
//     // remove: (project: IProject) => void;
// }

const ProjectListItem = ({ project }) => {

    return (
        <div>
            
            <Card >
                <Card.Body >
                      <img className="ml-3" src={project.imageUrl} width='96px' alt="Generic placeholder image"/>
    
                    <Card.Title>{project.id}. {project.title}</Card.Title>
                    <Card.Text >
                    {/* className="${tw`${lineClamp(3)}`}" */}
                    {project.body.replace(/(.{58})..+/, `$1...`)}  
                            {/* {project.body} */}
                    </Card.Text>
                    <Link to={`/card/${project.id}`} role="button">More to</Link>
                </Card.Body>
            </Card>
            <div className="media"
           
            >
                {/* {project.id}. {project.title} */}
                {/* <button onClick={handleDelete}>delete</button> */}
                {/* <button onClick={handleUpdate}>edit</button> */}
                {/* <button  href="/card/id" >details</button> */}
                {/* <Link to={`/card/${project.id}`} role="button">Detailes</Link> */}
            </div>
        </div>
    )
}

export default ProjectListItem
