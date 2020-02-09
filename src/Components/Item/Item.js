import React, {useEffect} from 'react';

const Item = (props) => {


    useEffect(() => {function hide() {
        props.hideMainPage()
    }
    hide();
    }, []);
    
    console.log(props.location.state.allprops);
    
    
    return (
        <>
            <h1>{props.location.state.title}</h1>
            <h2>Description</h2>
            <p>{props.location.state.description}</p>
            <h3>Data</h3>
            <p>{props.location.state.popularity}</p>
            <p>{props.location.state.vote}</p>
            <p>pic</p>
        </>

    )
}

export default Item;