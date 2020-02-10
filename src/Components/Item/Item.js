import React, { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Item = (props) => {

    let player = null;
    const [isPlayer, setIsPlayer] = useState(false);

    useEffect(() => {
        function hide() {
            props.hideMainPage()
        }
        hide();
    }, []);


    const showPlayer=(e)=>{
        e.preventDefault();
        setIsPlayer(true);
    }

    if(isPlayer) {
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
            {!player ? <button onClick={showPlayer}>Click here to watch the trailer</button> : null }
            
            {player}
        </>

    )
}

export default Item;