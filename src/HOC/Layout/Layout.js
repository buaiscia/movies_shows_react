import React, { Component } from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {    
        return (
            <div>
                <Toolbar isHidden={props.isHidden} />
                <main>
                    {props.children}
                </main>
            </div>

        )
    
}

export default Layout;