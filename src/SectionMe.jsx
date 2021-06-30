import React from 'react';
import './App.css'
import profile from './images/sectionMe.jpg'
import {Terminal}  from'react-bootstrap-icons'
import {Book} from 'react-bootstrap-icons'
import {CodeSquare} from "react-bootstrap-icons";


const SectionMe = props => {
    return(

            <div className="flex_principal">
                <section>

                    <figure>
                        <img src={profile} className={'profile'} alt={'profile'}/>
                    </figure>
                </section>
                <aside>
                    <h1><Terminal/> Étudiant, BAC en informatique, UdeM.</h1>
                    <br/>
                    <h1><Book/> Auxilaire d'enseignement (UdeM), été, 2021.</h1>
                    <br/>
                    <h1><CodeSquare/> Développeur Junior:</h1>
                    <ul>
                        <ul className={"square"}>
                            <li>
                                <li>Langages Web. </li>
                                <li>React.js.</li>
                                <li>Python.</li>
                                <li>Java et Android, etc..</li>
                            </li>
                        </ul>
                    </ul>
                </aside>
            </div>




    )
}

export default SectionMe;
