import ProjectDetails from "./project/ProjectDetails";
import { IProject } from "../models/IProject";
import { useParams } from 'react-router-dom';
import { projectAPI } from "../services/ProjectService";



interface CardPage {
    project: IProject
}

const CardPage: React.FC<CardPage> = () => {

    const [updateProject, { }] = projectAPI.useUpdateProjectMutation();

    let { id } = useParams<{ id }>();
    const { data: project, error, isLoading } = projectAPI.useFetchProjectByIdQuery(id);
    console.log(project);

    const erroeMassege = () => {
        return (<h1>"Can not fetch details"</h1>)
    }
    console.log('id', id);

    const handleUpdate = (project: IProject) => {
        updateProject(project)
    }

    return (
        <div>
            <div>
                {error && <h1>Error find...</h1>}
                {(project) ? <ProjectDetails project={project}  update={handleUpdate} /> : erroeMassege()}
            </div>
        </div>
    )
}

export default CardPage
