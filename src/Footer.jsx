import * as ReactDOM from "react-dom";
import React from "react";


const Footer = props =>
{
    return (
        <footer id={props.id} >

            <p className={"pseudoFooter"}>César Augusto Rodríguez &copy; 2021</p>

        </footer>
    );
}

ReactDOM.render(<Footer/>, document.getElementById('root'));

export default Footer;


