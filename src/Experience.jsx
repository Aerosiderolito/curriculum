import * as ReactDOM from "react-dom";
import carte1 from "./images/pc.jpg"

import {CheckCircle} from "react-bootstrap-icons";


const Experience = props =>
{
    return (
            <div className={"flex_experience"} >

                <section>

                    <div className={"card carta bg-light"} >
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

                </section>

                    <aside className={"prePaneau listJust"}>

                        <h2><CheckCircle/>&nbsp; Collaborer à l'enseigenement. </h2>
                        <h2><CheckCircle/>&nbsp; Corriger des travaux pratiques.</h2>

                        <h2><CheckCircle/>&nbsp; Dépanner du code. </h2>

                        <h2><CheckCircle/>&nbsp; Donner des seances de support à l'enseignement. </h2>

                        <h2><CheckCircle/>&nbsp; Diriger un groupe. </h2>

                    </aside>

                </div>

    );
}

ReactDOM.render(<Experience/>, document.getElementById('root'));

export default Experience;

