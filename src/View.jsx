import React from "react";
import * as ReactDOM from "react-dom";
import SectionMe from './SectionMe'
import Menu from './Menu'
import Experience from "./Experience";
import Skills from "./Skills";
import Footer from "./Footer";
import {BriefcaseFill} from "react-bootstrap-icons";
class View extends React.Component {

    render() {
        return (


            <div data-spy="scroll" data-target=".navbar" data-offset="50">
                <Menu/>
                <h1 className={"spacer sectionTitle"} id={"section1"}>César Augusto Rodríguez</h1>
                <SectionMe id={"section1"}/>
                <h1 id={"section2"}  className={"spacer1 sectionTitle"}>
                    <BriefcaseFill/> Auxilaire en dévéloppement Web
                </h1>
                <Experience id={"section2"} />
                <Skills/>
                <Footer id={"section4"}/>


            </div>




        );
    }
}
ReactDOM.render(<View/>, document.getElementById('root'));

export default View;

