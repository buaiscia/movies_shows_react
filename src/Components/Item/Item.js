import React, { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer'; // import the Shaka player video configuration component 

import classes from './Item.module.css'

const Item = (props) => {

    let player = null;
    const [isPlayer, setIsPlayer] = useState(false);    //assign state to isPlayer

    // function called at pressing the esc button to close the full screen and exit the player
    const escFunction = () => {

        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            setIsPlayer(false); // set false to isPlayer
        }
    }

    useEffect(() => {
        function hide() {
            // callback function to change states to show/hide main/search page
            props.hideMainPage()
            props.hideSearchPage()

        }
        hide(); //IIF after component mounted

        //listener for various browsers for checking the fullscreen option
        document.addEventListener('fullscreenchange', escFunction);
        document.addEventListener('webkitfullscreenchange', escFunction);
        document.addEventListener('mozfullscreenchange', escFunction);
        document.addEventListener('MSFullscreenChange', escFunction);

    }, []);

    // console.log(props);


    const showPlayer = (e) => {
        e.preventDefault();
        setIsPlayer(true); //set true to isPlayer
    }

    // if player is true, show the component
    if (isPlayer) {
        player = (<VideoPlayer image={props.location.state.poster} />)
    }

    let locState = props.location.state;


    return (


        <>
            {/* pass all props from the Carousel component */}
            <div className={classes.mainDiv}>
                <div className={classes.col1}>
                    <h1 style={{paddingBottom: "10%"}}>{locState.title || locState.name}</h1>
                    <h3>Description</h3>
                    <p>{locState.description}</p>
                    <hr/>
                    <p>Popularity: {locState.popularity}</p>
                    <p style={{paddingBottom: "5%"}}>Vote: {locState.vote}</p>
                    {/* show the button if the player is unactive */}
                    {!player ? <button className={classes.buttonShow} onClick={showPlayer}>Watch the trailer</button> : null}
                    <br />
                    {/* show the player component */}
                    {player}
                </div>
                <div className={classes.col2}><img alt={`${locState.title} poster`} src={locState.poster} /></div>

            </div>
            <div>


            </div>
        </>

    )
}

export default Item;