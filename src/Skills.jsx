import React, {useState} from 'react';
import imgDip from './images/math.jpg'
import imgAw from './images/cables.jpg'
import './App.css'
import {PopUpMenu} from "./style";
import {Globe, Star} from "react-bootstrap-icons";
import {Collapse} from "react-bootstrap";
import {Animated} from "./Fade";


const Skills = props => {
    const [open, setOpen] = useState(false);
    return(
        <div className={"flex_skills"} id={"section3"}>
            <section className={"alignCellTop list-group leftText"}>
                {/*premiere colonne*/}

                    <h2 className={"subsectionTitle"} >D'autres informations</h2>


                    <PopUpMenu id={"1"} className={"list-group-item list-group-item-action"}
                               />


                    <button className={"list-group-item list-group-item-action"}
                            onClick={() => setOpen(!open)}
                            aria-controls={"example-collapse-text light"}
                            aria-expanded={open}
                    >
                         <Animated/>

                    </button>

                    <div className={"list-group-item list-group-item-action leftText "}
                         onClick={() => setOpen(!open)}
                         aria-controls={"example-collapse-text light"}
                         aria-expanded={open}

                    >

                        <h4 className={"leftText smallItem "}><Globe/> Langues parlées</h4>
                        <Collapse in={open}>

                            <ul>
                                <li>Français </li>
                                <li>Anglais</li>
                                <li>Espagnol</li>
                            </ul>

                        </Collapse>

                    </div>

                    <div className={"list-group-item list-group-item-action leftText "}
                         onClick={() => setOpen(!open)}
                         aria-controls={" light"}
                         aria-expanded={open}
                    >

                        <h4 className={"leftText smallItem"}><Star/> Loisirs</h4>

                        <Collapse in={open}>

                            <ul>
                                <li>Raspberry Pi </li>
                                <li>Soccer</li>
                                <li>Litérature</li>
                            </ul>

                        </Collapse>


                </div>


            </section>
            <aside>
                <h1 className={"subsectionTitle"}>
                    <strong>À propos </strong>
                </h1>

                    <p className={"justify"}>
                        En plus de mon expérience comme auxilaire d'enseignement, j'ai occupé le poste
                        d'assistant technicien à l'université de Montréal pour l'année 2020. J'ai aussi de
                        l'expérience comme employé regulier, j'ai travaillé comme cassier, employé d'entrepôt, busboy, etc. <br/>
                        <br/>
                        Je suis familier avec les différents systèmes d'explotation, IDEs, et plusieurs langages de programation.

                        <br/> <br/>
                    </p>

                <h1 className={"subsectionTitle "}>Études</h1>

                    <ul className={"deuxCartes"}>
                        <li>
                            <div className="card ">
                                <img src={imgDip} className="card-img-top" alt="diploma"/>
                                <div className="card-body">
                                    <h5 className="card-title">Dec en science (Maisonneuve)</h5>
                                    <p className="card-text">Obtenu en 2017</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="card">
                                <img src={imgAw} className="card-img-top" alt="Bourse"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Bourse (UdeM)</h5>
                                    <p className="card-text">Obtenue en 2020</p>
                                </div>
                            </div>
                        </li>
                    </ul>


            </aside>
    </div>
    )

}
export default Skills;
