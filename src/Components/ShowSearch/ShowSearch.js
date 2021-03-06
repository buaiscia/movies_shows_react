import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './ShowSearch.module.css'

const ShowSearch = (props) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };


    const searchRes = (
        <div className={classes.mainSearchPage}>
            <h2>Search results: </h2>
            <Carousel
                className={classes.carouselStyle}
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={false}
                infinite={true}
                keyBoardControl={true}
                containerClass='carousel-container'
                removeArrowOnDeviceType={['tablet', 'mobile']}
                deviceType={props.deviceType}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'>
                {props.singleSearch}
            </Carousel>
        </div>
    )
    return searchRes;

}
export default ShowSearch;