import * as ReactDOM from "react-dom";
import carte1 from "./images/pc.jpg"

import {BriefcaseFill, CheckCircle} from "react-bootstrap-icons";


const Experience = props =>
{
    return (
        <>
            <div id={props.id} >
                <h1  className={"spacer sectionTitle"}>
                    <BriefcaseFill/> Mon Expérience
                </h1>

                    <div className={"prePaneau"}>
                        <h2 className={"biggerH2 sectionTitle"}>
                            Auxilaire en dévéloppement Web
                        </h2>
                        <table className={"listJust"}>
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td><h2><CheckCircle/>&nbsp; Collaborer à l'enseignant dans l'enseigenement </h2> </td>
                                <td rowSpan={"5"}>
                                    <div className={"card carta bg-light cardDemo"} >
                                        <img className={"card-img-top"} src={carte1} alt={"Card"}/>
                                        <div className={"card-body"}>
                                            <h5 className={"card-title "}><b>IFT-1945</b></h5>
                                            <p className={"card-text  "}>Été 2021</p>
                                            <a href={"https://admission.umontreal.ca/cours-et-horaires/cours/ift-1945/"} target={"_blank"}
                                               rel={"noreferrer"} className={"btn btn-info"}>Site officiel</a>
                                            &nbsp;
                                            <a href={"https://www-ens.iro.umontreal.ca/~rodrigce/Demos/IFT-1945/build2/index.html"} rel={"noreferrer"} target={"_blank"} className={"btn btn-info"}>Mes Cours</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><h2><CheckCircle/>&nbsp; Corriger des travaux pratiques</h2> </td>
                            </tr>
                            <tr>
                                <td><h2><CheckCircle/>&nbsp; Dépanner du code, Diriger un groupe </h2> </td>
                            </tr>
                            <tr>
                                <td><h2><CheckCircle/>&nbsp; Donner des seance de support à l'enseignement </h2></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>




            </div>

        </>
    );
}

ReactDOM.render(<Experience/>, document.getElementById('root'));

export default Experience;

