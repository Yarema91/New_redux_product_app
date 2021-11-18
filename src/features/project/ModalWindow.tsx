
import { Button, Modal } from "react-bootstrap"
import { useState } from "react";


const ModalWindow = ({ title, nameButton, children, onHandleSubmit, disabled }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = () => {
        onHandleSubmit();
        setShow(false);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                {title}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                   
                    <Button variant="primary"
                        disabled={disabled}
                        onClick={onSubmit} >
                        {nameButton}
                    </Button>
                    

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalWindow
