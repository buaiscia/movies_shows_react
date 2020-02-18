import React from 'react';
import { createPortal } from 'react-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './ShowSearch.module.css'

const ShowSearch = (props) => {

    const content = document.getElementById('showContent'); //take the element id where to pass the component

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };


    const searchRes = (
        <>
            <div className={classes.mainSearchPage}>
                <h2>Search results: </h2>
                {/* Pass the result element into the carousel */}
                <Carousel
                    className={classes.carouselStyle}
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {props.singleSearch}
                </Carousel>
            </div>

        </>
    )
    return searchRes;
    // through createPortal pass the component (searchRes) to the id (content)
    // return createPortal(

    //     searchRes, content

    // )
}
export default ShowSearch;