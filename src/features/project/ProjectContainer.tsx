import React, { useState } from 'react';
import { IProject } from '../../models/IProject';
import { projectAPI } from "../../services/ProjectService"
import ProjectListItem from "./ProjectListItem"

const ProjectContainer = () => {

    const [limit, setLimit] = useState(10);
    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(limit);
    const [createProject, {error: CreateError, isLoading: CreateIsLoading}] = projectAPI.useCreateProjectMutation()
    const [deleteProject, {}] = projectAPI.useDeleteProjectMutation();
    const [updateProject, {}] = projectAPI.useUpdateProjectMutation();


    const handleCreate = async() => {
        const title = prompt();
        await createProject({ title, body: title } as IProject)

    }
    const handleUpdate = (project: IProject) => {
        updateProject(project)
    }
    const handleRemove = (project: IProject) => {
        deleteProject(project)
    }

    return (
        <div>
            <div className="project__list">
                {CreateIsLoading && <h1>Loading create project...</h1>}
                {CreateError && <h1>Error creative...</h1>}
                <button onClick={handleCreate}>Create project</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error download...</h1>}
                {projects && projects.map(project =>
                    <ProjectListItem update={handleUpdate} remove={handleRemove} project={project} key={project.id} />
                )}
            </div>
        </div>
    )
}

export default ProjectContainer
