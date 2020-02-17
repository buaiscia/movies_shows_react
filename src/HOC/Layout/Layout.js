import React from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            {/* Calling Toolbar component which includes the Searchbar */}
            <Toolbar
                isHidden={props.isHidden}
                isSearch={props.isSearch}
                showSearchPage={props.showSearchPage} />

            {/* Main HTML element where children component are visualized */}
            <main className={classes.mainClass}>
                {props.children}
            </main>
        </div>

    )

}

export default Layout;