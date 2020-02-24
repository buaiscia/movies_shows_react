import React from 'react';

import Carousels from '../Components/Carousel/Carousel';

function showItem  (showArray) {
    
    
    const pathImg = 'https://image.tmdb.org/t/p/w185'; //get default starting path for images for carousel

    // parse the array and  pass each item to a variable
    return showArray.map((item) => {
        
        let poster = item['poster_path'] ? pathImg + item['poster_path'] : null;
        let title = item['title'];
        let name = item['name'];
        let id = item['id'];
        let description = item['overview'];
        let popularity = item['popularity'];
        let vote = item['vote_average'];

        // callback to return the Component  with props as the parsed array items
        return <Carousels 
            key={id} 
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