import React from 'react';

const MovieCarousel = (props) => {
    return (
        <div>
            <p> Movie name: {props.movieTitle}</p>
            <img src={props.poster} />
        </div>
    )
}

export default MovieCarousel;