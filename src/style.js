import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {FileArrowDownFill} from "react-bootstrap-icons";

export const Cv = props =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <button onClick={handleShow} id={props.id} className={props.className}>
                <FileArrowDownFill/> Curriculum Vitae
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mon curriculum</Modal.Title>
                </Modal.Header>
                <Modal.Body>Voulez-vous voir la version PDF de mon curriculum</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant={"primary"} onClick={handleClose} href={"./docs/CV_EN"}
                    download={"docs/CV_EN"}>
                        CV.pdf
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}


