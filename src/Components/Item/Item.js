import React, {useEffect} from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Item = (props) => {


    useEffect(() => {function hide() {
        props.hideMainPage()
    }
    hide();
    }, []); 
    
    return (
        <>
            <h1>{props.location.state.title}</h1>
            <h2>Description</h2>
            <p>{props.location.state.description}</p>
            <h3>Data</h3>
            <p>{props.location.state.popularity}</p>
            <p>{props.location.state.vote}</p>
            <img src={props.location.state.poster} />
            <VideoPlayer image={props.location.state.poster}/>
        </>

    )
}

export default Item;