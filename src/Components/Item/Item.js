import React, {useEffect} from 'react';

const Item = (props) => {

    let properties = {...props};

    useEffect(() => {function hide() {
        properties.hideMainPage()
    }
    hide();
    }, []);
    
    
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