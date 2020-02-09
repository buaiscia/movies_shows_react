import React from 'react';

import Carousels from '../Components/Carousels/Carousel';

function showItem  (arr) {
    
    
    const pathImg = 'https://image.tmdb.org/t/p/w154';

    return arr.map((item, i) => {
        let movieTitle = item["title"];
        let moviePic = pathImg + item["poster_path"];
        let movieId = item["id"];
        // console.log(moviePic);
        
        // console.log(moviePic);
        
        return <Carousels key={i} id={movieId} movieTitle={movieTitle} poster={moviePic} />
    })
}

export default showItem;