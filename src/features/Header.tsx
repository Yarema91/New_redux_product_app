import { useCallback, useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { IProject } from '../models/IProject';
import { projectAPI } from '../services/ProjectService';
import ModalWindow from './project/ModalWindow';
import projectSlice from './project/projectSlice';
import SearchBar from './project/SearchBar';

// interface Header {
//     project: IProject
// }


const defaultFormValues = {
    imageUrl: '',
    title: ''
    // ,
    // count: '',
    // width: '',
    // height: '',
    // weight: ''
};

const Header = () => {

    const [createProject, { error: CreateError, isLoading: CreateIsLoading }] = projectAPI.useCreateProjectMutation()


    const handleCreate = async () => {
        const title = prompt();
        if (title === ""){
            <h1>Title empty...</h1>
        } else await createProject({ title, body: title, status: "active" } as IProject)
    }
//test 
  
    // Form =>
    const [projectInput, setProjectInput] = useState<any | null>(defaultFormValues); 

    const handleCreate1 = async () => {
        const title = projectInput.title;
        if (title == ""){
            <h1>Title empty...</h1>
        } else await createProject({ title, body: title, status: "finish" } as IProject);
        setProjectInput("")
    }

    // // const onChangeHandler = useCallback(
    // //     ({ target: { name, value } }) => setProductInput(productInput => ({ ...productInput, [name]: value }), [] )
    // // );

    // // Form <=

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
                    <SearchBar />
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>

                    <ModalWindow title="Create Project" nameButton="Save" onHandleSubmit={handleCreate1}>
                        <form className="mb-3" action="create-form" >
                            <div><span>Name</span>
                                <input
                                    className='input'
                                    type="text"
                                    // text='name'
                                    placeholder='name'
                                    value={projectInput.title || ""}
                                    onChange={e => setProjectInput({ ...projectInput, title: e.target.value })}
                                />
                            </div>
                        </form>
                    </ModalWindow>
                    {CreateIsLoading && <h1>Loading create project...</h1>}
                    {CreateError && <h1>Error creative...</h1>}
                    <Button variant="outline-success" className="me-2" onClick={handleCreate}>Create Project</Button>
                    <Button variant="success">Log In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
