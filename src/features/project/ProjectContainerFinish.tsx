import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { projectAPI } from "../../services/ProjectService"
import ProjectListItem from "./ProjectListItem"

const ProjectContainer = () => {

    // const [limit, setLimit] = useState(10);
    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(10);
    
    return (
        <div >
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header style={{ color: "#03C5EE" }} as="h6" >Finish</Card.Header>
                <div style={{ height: "42em", overflow: "auto" }}>
                    {isLoading && <h1>Loading...</h1>}
                    {error && <h1>Error download...</h1>}
                    {projects && projects.filter(project => project.status == "finish").map(project =>
                    <ProjectListItem project={project} key={project.id} />
                )}
                </div>
            </Card>
        </div>
    )
}

export default ProjectContainer
