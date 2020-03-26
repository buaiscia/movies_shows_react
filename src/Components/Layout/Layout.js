import React from 'react';
import Toolbar from '../../Components/UI/Navigation/Toolbar/Toolbar';

// import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </div>

    )

}

export default Layout;