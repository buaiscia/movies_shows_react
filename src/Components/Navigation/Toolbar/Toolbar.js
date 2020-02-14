import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import SearchBar from './SearchBar/SearchBar';

import navLogo from '../../../assets/images/tmdb.svg'

const toolbar = (props) => {

    return (
        <header>
            
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"> <img style={{width : "80px", }} alt="The movie db logo" src={navLogo} /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" onClick={props.hideSearchPage} >Home</Nav.Link>
                    </Nav>
                    <SearchBar isHidden={props.isHidden}  hideSearchPage={props.hideSearchPage} isSearch={props.isSearch} showSearchPage={props.showSearchPage}/>
                </Navbar.Collapse>
            </Navbar>
           

        </header>
    )
}


export default toolbar;