import React from 'react';

import './NavDrawer.css';
import NavigationItems from '../Navigation/NavItems/NavItems';

const NavDrawer = (props) => {
    return (
        <div className="NavDrawer">
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default NavDrawer;