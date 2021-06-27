import React from 'react';
import './App.css'
import profile from './images/sectionMe.jpg'
import {Terminal}  from'react-bootstrap-icons'
import {Book} from 'react-bootstrap-icons'
import {CodeSquare} from "react-bootstrap-icons";


const SectionMe = props => {
    return(

        <div id={props.id} className="container-fluid section">
            <div>
                <h1 className={"spacer sectionTitle"}>📑 César Augusto Rodríguez</h1>

                <table className={"table-responsive-md profileTab"} >
                    <tbody>
                    <tr>
                        <td rowSpan={"2"}>
                            <figure>
                                <img src={profile} className={'profile'} alt={'profile'}/>
                            </figure>
                        </td>
                        <td>
                            <h1><Terminal/> Étudiant, BAC en informatique, UdeM</h1>
                            <br/>
                            <h1><Book/> Auxilaire d'enseignement (UdeM), été, 2021</h1>
                            <br/>
                            <h1><CodeSquare/> Developpeur Junior:</h1>
                            <ul>
                                <ul className={"square"}>
                                    <li>
                                        <li> <h2>Langages Web</h2> </li>
                                        <li><h2>React.js</h2></li>
                                        <li><h2>Python</h2></li>
                                        <li><h2>Java et Android, etc..</h2></li>
                                    </li>
                                </ul>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SectionMe;
