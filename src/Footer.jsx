import * as ReactDOM from "react-dom";
import React from "react";


const Footer = props =>
{
    return (
        <footer id={props.id} >

            <p className={"pseudoFooter"}>César Augusto Rodríguez &copy; 2021</p>
            <a href={"../docs/cvWeb.html"} target={"_blank"} rel={"noreferrer"}>
                bbbbbbb
            </a>

        </footer>
    );
}

ReactDOM.render(<Footer/>, document.getElementById('root'));

export default Footer;


