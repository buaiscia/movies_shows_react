import React from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Toolbar />
            <main className={classes.mainClass}>
                {props.children}
            </main>
        </div>

    )

}

export default Layout;