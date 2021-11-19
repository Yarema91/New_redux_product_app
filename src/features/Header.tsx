import { useCallback, useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { isJSDocVariadicType } from 'typescript';
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
    title: '',
    body: ''
};

type FieldName = "title" | "body" | "imageUrl";

const Header = () => {

    const [createProject, { error: CreateError, isLoading: CreateIsLoading }] = projectAPI.useCreateProjectMutation()

    // const handleCreate = async () => {
    //     const title = prompt();
    //     if (title === "") {
    //         <h1>Title empty...</h1>
    //     } else await createProject({ title, body: title, status: "active" } as IProject)
    // }

    // Form =>
    const [projectInput, setProjectInput] = useState<{ title: string, body: string, imageUrl: string }>(defaultFormValues);
    const [isDirty, setIsDirty] = useState<{ [id: string]: boolean }>({ title: false });


    const validationState: { [id: string]: { isInvalid: boolean, message: string }[] } = {
        "title": [
            { isInvalid: projectInput.title === "", message: "Title can not be empty" },
            { isInvalid: (projectInput.title !== "") && projectInput.title?.length < 3, message: "Title is too short" },
        ],
        "body": [
            { isInvalid: projectInput.body === "", message: "Body can not be empty" },
        ]
    };

    const getFieldValidation = (fieldName: FieldName) => {
        const result = validationState[fieldName];
        var isInvalid = result.map(x => x.isInvalid).some(x => x);
        var messages = result.filter(x => x.isInvalid).map(x => x.message);
        return {
            isInvalid: isInvalid,
            messages
        }
    };

    const getFormIsValid = () => {
        return !getFieldValidation("title").isInvalid &&
            !getFieldValidation("body").isInvalid;
    };

    const handleCreate1 = async () => {
        const title = projectInput.title;
        const body = projectInput.body;

        if (!getFormIsValid()) {
            <h1>Input empty...</h1>
        } else {
            await createProject({ title, imageUrl: "https://source.unsplash.com/1600x900/?project-art", body, status: "active" } as IProject);
            setProjectInput(defaultFormValues);
        }
    }

    return (
        <Navbar bg="light" expand="lg"
            //  sticky="top"
            fixed="top"
        >
            <Container fluid>
                {/* <Navbar.Brand href="/">Logo</Navbar.Brand> */}
                <Link to="/" role="button" style={{ textDecoration: "none", color: "black" }}>Logo</Link>
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

                    <ModalWindow title="Create Project" nameButton="Save" onHandleSubmit={handleCreate1} disabled={!getFormIsValid()} >

                        <form className="row g-3" action="create-form" >
                            <div className="col-md-4">
                                <div className="form-outline">
                                    <label htmlFor="validationDefault01" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='title'
                                        value={projectInput.title || ""}
                                        onChange={e => {
                                            setProjectInput({ ...projectInput, title: e.target.value });
                                            setIsDirty({ ...isDirty, "title": true });
                                        }
                                        }
                                    />
                                </div>
                            </div>
                            <div style={{ backgroundColor: "gold" }}>
                                {isDirty["title"] && getFieldValidation("title").messages}
                            </div>

                            <div className="">
                                <div className="form-outline">
                                    <label htmlFor="validationDefault01" className="form-label">Body</label>
                                    <textarea
                                        // type="text"
                                        className='form-control'
                                        placeholder='body'
                                        value={projectInput.body || ""}
                                        onChange={e => {
                                            setProjectInput({ ...projectInput, body: e.target.value });
                                            setIsDirty({ ...isDirty, "body": true });
                                        }}
                                    />
                                </div>
                            </div>
                            <div style={{ backgroundColor: "gold" }}>
                                {isDirty["body"] && getFieldValidation("body").messages}
                            </div>

                        </form>
                    </ModalWindow>
                    {CreateIsLoading && <h1>Loading create project...</h1>}
                    {CreateError && <h1>Error creative...</h1>}
                    {/* <Button variant="outline-success" className="me-2" onClick={handleCreate}>Create Project</Button> */}
                    <Button variant="success">Log In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
