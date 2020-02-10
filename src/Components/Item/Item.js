import React, { useEffect, useState, useCallback } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Item = (props) => {

    let player = null;
    const [isPlayer, setIsPlayer] = useState(false);


    const escFunction = () => {

        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            setIsPlayer(false);
        }
    }

    useEffect(() => {
        function hide() {
            props.hideMainPage()
        }
        hide();

        document.addEventListener('fullscreenchange', escFunction);
        document.addEventListener('webkitfullscreenchange', escFunction);
        document.addEventListener('mozfullscreenchange', escFunction);
        document.addEventListener('MSFullscreenChange', escFunction);
        
    }, []);

    

    const showPlayer = (e) => {
        e.preventDefault();
        setIsPlayer(true);
    }

    if (isPlayer) {
        player = (<VideoPlayer image={props.location.state.poster} />)
    }

    return (
        <>
            <h1>{props.location.state.title}</h1>
            <h2>Description</h2>
            <p>{props.location.state.description}</p>
            <h3>Data</h3>
            <p>{props.location.state.popularity}</p>
            <p>{props.location.state.vote}</p>
            <img src={props.location.state.poster} />
            {!player ? <button onClick={showPlayer}>Click here to watch the trailer</button> : null}

            {player}
        </>

    )
}

export default Item;