import React from 'react';

const PopMovieCarousel = (props) => {
    return (
        <div>
            <p> Movie name: {props.movieTitle}</p>
            <img src={props.poster} />
        </div>
    )
}

export default PopMovieCarousel;