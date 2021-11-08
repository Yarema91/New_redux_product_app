// import React, {FC} from 'react';
import { IProject } from '../../models/IProject';

interface ProjectListItem{
project: IProject;
update: (project: IProject) => void;
remove: (project: IProject) => void;
}

const ProjectListItem: React.FC<ProjectListItem> = ({project, remove, update}) => {

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
 
       const handleDelete = (event: React.MouseEvent) => {
           event.stopPropagation();
           remove(project)
           
       };
       const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ""
        update({...project, title} as IProject)
        
    }

    return (
        <div>
            <div className="post" onClick={handleUpdate}>
            {project.id}. {project.title}
            <button  onClick={handleDelete}>delete</button>
            </div>
        </div>
    )
}

export default ProjectListItem
