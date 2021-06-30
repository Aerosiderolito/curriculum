import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {QuestionCircleFill} from "react-bootstrap-icons";

export const PopUpMenu = props =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <a onClick={handleShow}  href={"/#null"} className={props.className}><QuestionCircleFill/>
                 &nbsp;Quoi d'autre?
            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Activités</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span><b>Je participe de temps en temps aux activités reliés à l'informatique.
                        <span/></b></span><br/>
                    Ce nom de domaine a été obtenu dans le Hackathon 2021 (PolyTechnique)😎
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}


