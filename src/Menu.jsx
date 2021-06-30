import React, {useState} from 'react';
import './App.css'
import {Collapse, DropdownButton, Dropdown} from "react-bootstrap";
import {
    EnvelopeFill, FileArrowDownFill,
    FileCodeFill,
    InfoCircleFill,
    List,
    PencilFill,
    QuestionCircleFill
} from "react-bootstrap-icons";
import {PopUpMenu} from "./style";


const Menu = props => {
    const [open, setOpen] = useState(false);
    return(
        <div>

            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark fixed-top "} id={"navMenu"}>
                <ul className={"navbar-nav nav_align centerList"}>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/#section1"}>Qui suis - je</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/#section2"}>Enseignement</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/#section3"}>Expérience</a>
                    </li>
                </ul>

                <DropdownButton id={"dropdown-button"} title={"Contact"} className={"bg-dark text-dark"}>

                    <Dropdown.Item  className={"dropList"} href={"https://www.overleaf.com/read/gkprjkqnwfnw"} target={"_blank"}><FileArrowDownFill/>Curriculum.pdf</Dropdown.Item>
                    <Dropdown.Item className={"dropList"} href={"mailto:cesar.augusto.rodriguez@umontreal.ca"}><EnvelopeFill/> Me contacter</Dropdown.Item>
                    <Dropdown.Item className={"dropList"} href={"https://www-ens.iro.umontreal.ca/~rodrigce/"} target={"_blank"}><FileCodeFill/> CV.html</Dropdown.Item>
                </DropdownButton>

            </nav>


            <button id={"responsiveNav"}
                    onClick={() => setOpen(!open)}
                    aria-controls={"example-collapse-text light"}
                    aria-expanded={open}
                    className={"list-group-item list-group-item-action bg-dark"}
            >
                <h4 className={"menuPara"}><List/> Menu </h4>

                <Collapse in={open}>

                    <ul className={"responsiveList"}>
                        <li>
                            <a className={"list-group-item list-group-item-action bg-dark text-light"} href={"/#section1"}>
                                <QuestionCircleFill/> Qui suis - je</a>
                            <a className={"list-group-item list-group-item-action bg-dark text-light"} href={"/#section2"}>
                                <PencilFill/> Enseignement</a>
                            <a className={"list-group-item list-group-item-action bg-dark text-light"} href={"/#section3"}>
                                <InfoCircleFill /> Informations</a>

                            <PopUpMenu id={"1"} className={" text-light list-group-item list-group-item-action bg-dark"}
                                       title={"Curriculum Vitae.pdf"}/>

                            <a  href={"mailto:cesar.augusto.rodriguez@umontreal.ca"} id={"2"}
                                className={"list-group-item list-group-item-action bg-dark text-light"}>
                                <EnvelopeFill/> Me contacter
                            </a>
                            <a className={"list-group-item list-group-item-action bg-dark text-light"} href={"https://www.overleaf.com/read/gkprjkqnwfnw"}><FileCodeFill/>Curriculum.pdf</a>
                        </li>
                    </ul>
                </Collapse>
            </button>
        </div>
    )
}
export default Menu;
