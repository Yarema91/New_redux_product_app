import { Button, Card } from "react-bootstrap"
import { IProject } from "../../models/IProject"

interface ProjectDetails {
    project: IProject,
    update: (project: IProject) => void;
    remove: (project: IProject) => void;
}

const ProjectDetails: React.FC<ProjectDetails> = ({ project, update, remove }) => {

    const handleUpdate = (event: React.MouseEvent) => {

        const title = prompt();
        if (title) {
            if (title !== '') {
                update({ ...project, title } as IProject)
            } else return
        } else {
            return
        }
        // const title = prompt() 
        // if(!title){
        //     return
        // } else {
        //     if(title !== ''){
        //         update({ ...project, title } as IProject)
        //     } else return
        // }

    }
    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (window.confirm("Really delete this project?")) {
            remove(project);
            window.location.href = "/";
        } else return
    };

    return (
        <div  >
            <Card style={{ width: '70%' }}  >
                {/* style={{ width: '38rem'}}  */}
                <Card.Img variant="top" src={project.imageUrl} />
                {/* <img  /> */}
                <Card.Body>
                    <Card.Title> {project.id}. {project.title}</Card.Title>

                    <Card.Text>
                        {project.body}
                    </Card.Text>
                    <Button variant="primary" className="me-2" onClick={handleUpdate}>Edit</Button>
                    <Button variant="primary" onClick={handleDelete} >Delete</Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectDetails
