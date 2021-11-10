// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { IProject } from '../models/IProject';
import { projectAPI } from '../services/ProjectService';

const Header = () => {

    const [createProject, { error: CreateError, isLoading: CreateIsLoading }] = projectAPI.useCreateProjectMutation()

    const handleCreate = async () => {
        const title = prompt();
        if(title == null){
            <h1>Title empty...</h1>
        } else await createProject({ title, body: title } as IProject)

    }

    return (
        <Navbar bg="light" expand="lg"
        //  sticky="top"
        fixed="top"
        >
            <Container fluid>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form
                     className="d-flex" 
                    >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            
                            className="me-2"
                            // className="justify-content-center"
                            aria-label="Search"
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    {CreateIsLoading && <h1>Loading create project...</h1>}
                    {CreateError && <h1>Error creative...</h1>}
                    <Button variant="outline-success"  className="me-2" onClick={handleCreate}>Create Project</Button>
                    <Button variant="success">Log In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
