// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg"
        //  sticky="top"
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
                    <Button variant="outline-success"  className="me-2">New Product</Button>
                    <Button variant="success">Log In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
