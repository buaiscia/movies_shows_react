import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar/SearchBar';

import classes from './Toolbar.module.css'
import navLogo from '../../../assets/images/tmdb.svg'

const toolbar = (props) => {

    return (
        <header>

            <Navbar className={classes.MainToolbar} expand="lg">
                <Navbar.Brand href="/">
                    <img style={{ width: "80px", }} alt="The movie db logo" src={navLogo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Collapse for small screens */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* onclick calls function in app.js to reset state of showSearchPage */}
                        <Nav.Link href="/" onClick={props.hideSearchPage} >Home</Nav.Link>
                    </Nav>
                    {/* Searchbar component passing state and functions */}
                    <SearchBar
                        isHidden={props.isHidden}
                        isSearch={props.isSearch}
                        showSearchPage={props.showSearchPage} />
                </Navbar.Collapse>
            </Navbar>


        </header>
    )
}


export default toolbar;