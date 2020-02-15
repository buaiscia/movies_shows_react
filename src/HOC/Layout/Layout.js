import React, { Component } from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

const Layout = (props) => {    
        return (
            <div className={classes.Layout}>
                <Toolbar 
                    isHidden={props.isHidden} 
                    hideSearchPage={props.hideSearchPage} 
                    isSearch={props.isSearch} 
                    showSearchPage={props.showSearchPage}/>
                <main   >
                    {props.children}
                </main>
            </div>

        )
    
}

export default Layout;