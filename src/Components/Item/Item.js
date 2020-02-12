import React, { useEffect, useState } from 'react';
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

    let locState = props.location.state;


    return (


        <>
            <h1>{locState.title || locState.name}</h1>
            <h2>Description</h2>
            <p>{locState.description}</p>
            <h3>Data</h3>
            <p>{locState.popularity}</p>
            <p>{locState.vote}</p>
            <img alt={`${locState.title} poster`} src={locState.poster} />
            {!player ? <button onClick={showPlayer}>Click here to watch the trailer</button> : null}

            {player}
        </>

    )
}

export default Item;