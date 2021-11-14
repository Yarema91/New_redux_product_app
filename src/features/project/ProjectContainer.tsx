import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { projectAPI } from "../../services/ProjectService"
import ProjectListItem from "./ProjectListItem"

const ProjectContainer = () => {

    const [limit, setLimit] = useState(15);
    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(limit);
    // const [createProject, { error: CreateError, isLoading: CreateIsLoading }] = projectAPI.useCreateProjectMutation()
    // const [deleteProject, { }] = projectAPI.useDeleteProjectMutation();
    // const [updateProject, { }] = projectAPI.useUpdateProjectMutation();


    // const handleCreate = async () => {
    //     const title = prompt();
    //     await createProject({ title, body: title } as IProject)

    // }
    // const handleUpdate = (project: IProject) => {
    //     updateProject(project)
    // }
    // const handleRemove = (project: IProject) => {
    //     deleteProject(project)
    // }

    return (
        <div >
            {/* {CreateIsLoading && <h1>Loading create project...</h1>}
            {CreateError && <h1>Error creative...</h1>}
            <button onClick={handleCreate}>Create project</button> */}

            <Card border="success" style={{ width: '18rem' }}>
            <Card.Header style={{ color: "green"}} as="h6" >Active</Card.Header>        
            <div style={{ height: "42em", overflow: "auto" }}>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error download...</h1>}
                {projects && projects.filter(project => project.status == "active").map(project =>
                    <ProjectListItem project={project} key={project.id} />
                )}
            </div>
        </Card>
        </div>
    )
}

export default ProjectContainer
