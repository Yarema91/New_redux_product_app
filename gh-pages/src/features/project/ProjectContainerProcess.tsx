import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { projectAPI } from "../../services/ProjectService"
import ProjectListItem from "./ProjectListItem"

const ProjectContainer = () => {

    const [limit, setLimit] = useState(10);
    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(limit);
    
    return (
        <div >
           
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header style={{ color: "#FFB700" }} as="h6" >Process</Card.Header>
                <div style={{ height: "42em", overflow: "auto" }}>
                    {isLoading && <h1>Loading...</h1>}
                    {error && <h1>Error download...</h1>}
                    {projects && projects.filter(project => project.status == "process").map(project =>
                    <ProjectListItem project={project} key={project.id} />
                )}
                    
                     
                </div>
            </Card>
        </div>

    )
}

export default ProjectContainer
