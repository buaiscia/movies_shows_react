import React from 'react';

const Item = (props) => {
    console.log(props.location.state.isMainPage);
    
    return (
        <>
            <h1>Title</h1>
            <h2>Description</h2>
            <p>{props.location.state.isId}</p>
            <h3>Data</h3>
            <p>pic</p>
        </>

    )
}

export default Item;