import React from 'react';

import './App.css'


const Menu = props => {
    return(
        <nav className={"navbar navbar-expand-sm bg-dark navbar-dark fixed-top"}>
            <ul className={"navbar-nav"}>
                <li className={"nav-item"}>
                    <a className={"nav-link"} href={"#section1"}>Qui suis - je</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link"} href={"/#section2"}>Enseignement</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link"} href={"/#section3"}>Informations</a>
                </li>

            </ul>

        </nav>

    )

}
export default Menu;
