import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { IProject } from "../../models/IProject"
import { decrease, increase } from "../counter/counterSlice";

interface ProjectDetails {
    project: IProject,
    update: (project: IProject) => void;
    remove: (project: IProject) => void;
}

const ProjectDetails: React.FC<ProjectDetails> = ({ project, update, remove }) => {

    const value = useAppSelector(state => state.counterReducer.value);
    const dispatch = useDispatch();

    const handleUpdate = (event: React.MouseEvent) => {

        const title = prompt();
        if (title) {
            if (title !== '') {
                update({ ...project, title } as IProject)
            } else return
        } else {
            return
        }

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
                
                <Link aria-label="Close"
                    className="position-absolute top-0 end-0"
                    to="/"
                    style={{
                        color: "black",
                        margin: '0.5em 0.5em 0.5em ',
                        cursor: "pointer",
                        width: "3%",
                        background: 'white',
                        borderRadius: "5px",
                    }} ><i className="bi bi-x-lg"  style={{margin: '0.2em 0.2em 0.5em ',}}></i>
                </Link>
                
                {/* <div style={{ margin: '4%' }}><h1>{value}</h1>
                    <button className="me-2" onClick={() => dispatch(decrease())}>-</button>
                    <button onClick={() => dispatch(increase())}>+</button>
                </div > */}

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
