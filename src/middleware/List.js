import React from 'react';

import Carousels from '../Components/Carousels/Carousel';

function showItem  (arr) {
    
    
    const pathImg = 'https://image.tmdb.org/t/p/w154';

    return arr.map((item, i) => {
        let title = item["title"];
        let name = item["name"]
        let poster = pathImg + item["poster_path"];
        let id = item["id"];
        let description = item["overview"];
        let popularity = item["popularity"];
        let vote = item["vote_average"];
        // console.log(item);
        
        // console.log(moviePic);
        
        return <Carousels 
            key={i} 
            id={id} 
            title={title} 
            name={name}
            poster={poster} 
            description={description} 
            popularity={popularity}
            vote={vote}
            />
    })
}

export default showItem;