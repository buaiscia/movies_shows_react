import React from 'react';
import Carousels from '../Components/Carousels/Carousel';

function showItem  (arr) {
    
    
    const pathImg = 'https://image.tmdb.org/t/p/w154';

    return arr.map((item, i) => {
        let movieTitle = item["title"];
        let moviePic = pathImg + item["poster_path"];
        console.log(moviePic);
        
        // console.log(moviePic);
        
        return <Carousels key={i} movieTitle={movieTitle} poster={moviePic} />
    })
}

export default showItem;