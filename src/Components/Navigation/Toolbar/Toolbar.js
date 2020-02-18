import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import classes from './Toolbar.module.css'
import navLogo from '../../../assets/images/tmdb.svg'

const toolbar = (props) => {

    return (
        <header>

            {/* <Navbar className={classes.MainToolbar} expand="lg">
                <Navbar.Brand href="/">
                    <img style={{ width: "80px", }} alt="The movie db logo" src={navLogo} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="/" onClick={props.hideSearchPage} >Home</Nav.Link>
                    </Nav>

                    <Nav inline className="mr-auto">
                        <Nav.Link href="/search">Search</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
 */}

            <Navbar className={classes.MainToolbar} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img style={{ width: "80px", }} alt="The movie db logo" src={navLogo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/search">Search</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </header>
    )
}


export default toolbar;