import { Button, Card } from "react-bootstrap"
import { IProject } from "../../models/IProject"

interface ProjectDetails {
    project: IProject,
    update: (project: IProject) => void;
}

// interface ProjectListItem {
//     project: IProject;
//     update: (project: IProject) => void;
//     remove: (project: IProject) => void;
// }
const ProjectDetails: React.FC<ProjectDetails> = ({ project, update }) => {

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ""
        update({ ...project, title } as IProject)

    }

    return (
           <div  className="container" >
            <Card style={{ width: '70%'}}  >
            {/* style={{ width: '38rem'}}  */}
                <Card.Img variant="top"  src={project.imageUrl} />
                <img  />

                <Card.Body>
                    <Card.Title> {project.id}. {project.title}</Card.Title>
                   
                    <Card.Text>
                    {project.body}
                    </Card.Text>
                    <Button variant="primary" className="me-2" onClick={handleUpdate}>Edit</Button>
                    <Button variant="primary">Delete</Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectDetails
