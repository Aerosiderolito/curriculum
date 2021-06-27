import React from 'react';
import './App.css'
import { CodeSquare } from 'react-bootstrap-icons';

const Cours = props => {
    return(

        <div id={props.id} className="container-fluid bg-2 text-center section">
            <h3 className="margin">Mon expérience</h3>
            <p>Mon expérience de travail est essentialement académique, Je suis auxilaire d'enseignement pour le cours IFT-1945 à l'université
            de Montréal, mon travaille consiste à faire du soutient aux élèves, collaborer avec l'enseignant et donner des séance de depannage
            aux élèves.</p>
            <a className={"btn btn-light btn-lg"} href={"https://www-ens.iro.umontreal.ca/~rodrigce/Demos/IFT-1945/build2/index.html"}
               target={"_blank"} rel={"noreferrer"}>
                <CodeSquare /> IFT1945 Calendrier
            </a>
        </div>

    )
}

export default Cours;
