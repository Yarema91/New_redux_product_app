// import React, {FC} from 'react';
import { Button, Card, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProject } from '../../models/IProject';
import { lineClamp } from '@tailwindcss/line-clamp';



interface ProjectListItem {
    project: IProject;
    // update: (project: IProject) => void;
    // remove: (project: IProject) => void;
}

const ProjectListItem: React.FC<ProjectListItem> = ({ project }) => {

    // "id": 1,
    // "imageUrl": "some url here",
    // "name": "Product name",
    // "count": 4,
    // "size": {
    //     "width": 200,
    //     "height": 200
    //     },
    // "weight": "200g",
    // "comments": ["CommentModel", "CommentModel"]

    // const handleDelete = (event: React.MouseEvent) => {
    //     event.stopPropagation();
    //     remove(project)

    // };
    // const handleUpdate = (event: React.MouseEvent) => {
    //     const title = prompt() || ""
    //     update({ ...project, title } as IProject)

    // }

    return (
        <div>
            {/* <div className="${tw`max-w-xs mx-auto ${lineClamp(3)} md:${lineClamp('none')}`}">

"have noticed that all of the tutorials on this site have a dashed line running through the center of each step, both in the horizontal and vertical direction. If students make their own centered lines on their own paper, before drawing, they will have an easy reference to follow. The more realistic kangaroo tutorial even has an extra set, for a total of 16 boxes, to help older students be a little more precise."
            </div> */}
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
            // onClick={handleUpdate}
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
