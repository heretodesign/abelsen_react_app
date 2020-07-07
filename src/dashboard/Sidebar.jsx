import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <React.Fragment>
            <nav id="sidebar" data-testid="sidebar-nav">
                    <div className="sidebar-header">
                        <h3 data-testid="sidebar-title">Westeros</h3>
                    </div>
            
                    <ul className="list-unstyled components">
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <span className="ml-2" data-testid="sidebar-menu">Products</span>
                            </a>
                        </li>        
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faClone} />
                                <span className="ml-2">Whiteslists</span>
                            </a>
                        </li>        
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faRandom} />
                                <span className="ml-2">Api Application</span>
                            </a>
                        </li>        
                    </ul>
                </nav>  
        </React.Fragment>    
    );
}

export default Sidebar;
