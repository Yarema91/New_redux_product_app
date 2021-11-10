import ProjectDetails from "./project/ProjectDetails";
import { IProject } from "../models/IProject";
import { useParams } from 'react-router-dom';
import { projectAPI } from "../services/ProjectService";



interface CardPage {
    project: IProject
}

const CardPage: React.FC<CardPage> = () => {

    const [updateProject, {error: UpdateError, isLoading: UpdateIsLoading }] = projectAPI.useUpdateProjectMutation();
    const [deleteProject, {error: DeleteError, isLoading: DeleteIsLoading }] = projectAPI.useDeleteProjectMutation();


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
    const handleRemove = (project: IProject) => {
        deleteProject(project)
    }

    return (
            <div style={{ margin: '5% 2% 30% 20%' }}>
                {error && <h1>Error find...</h1>}
                {isLoading && <h1>Loading find by id project...</h1>}
                {DeleteError && <h1>Error delete...</h1>}
                {DeleteIsLoading && <h1>Loading Delete project...</h1>}
                {UpdateError && <h1>Error update...</h1>}
                {UpdateIsLoading && <h1>Loading update project...</h1>}
                {(project) ? <ProjectDetails project={project}  update={handleUpdate}  remove={handleRemove} /> : erroeMassege()}
            </div>
    )
}

export default CardPage
