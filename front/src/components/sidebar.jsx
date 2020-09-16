import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChartArea, faTextWidth } from '@fortawesome/free-solid-svg-icons'

const style = {
    paddingLeft : "5px"
}

const Sidebar = function()  {
    return(
    <div className='side-bar'>
        <h2>Sidebar</h2>
        <ul>
            <Link to={"/"}>
                <li>
                    Dashboard
                    <FontAwesomeIcon icon={faChartArea} style={style}></FontAwesomeIcon>
                </li>
            </Link>
            <Link to={'/add'}>
                <li>
                    Add new Licence
                    <FontAwesomeIcon icon={faPlus} style={style} ></FontAwesomeIcon>
                </li>
            </Link>
        </ul>
    </div>)
}

export default Sidebar;