import React from "react";
import * as ReactDOM from "react-dom";
import SectionMe from './SectionMe'
import Menu from './Menu'
import Experience from "./Experience";
import Skills from "./Skills";
import Footer from "./Footer";
class View extends React.Component {

    render() {
        return (


            <div data-spy="scroll" data-target=".navbar" data-offset="50">
                <Menu/>
                <SectionMe id={"section1"}/>
                <Experience id={"section2"} />
                <Skills id={"section3"}/>
                <Footer id={"section4"}/>


            </div>




        );
    }
}
ReactDOM.render(<View/>, document.getElementById('root'));

export default View;

