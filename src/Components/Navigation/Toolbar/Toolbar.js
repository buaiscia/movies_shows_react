import React from 'react';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

const toolbar = (props) => {
    // console.log(props)
    return (
        <header>
            <Logo />
            <p> toolbar header </p>
            <SearchBar isHidden={props.isHidden} />
        </header>
    )
}
    

    
    





export default toolbar;