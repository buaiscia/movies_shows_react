import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ErrorHandler from '../ErrorComp/ErrorComp';


const ShowSearch = (props) => {
    

console.log(props);

    // use useState to change showMainPage to falsae

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

    // let locState = props.location.state;

    // useEffect(() => {
    //     function hide() {
    //         props.hideMainPage()
    //     }
    //     hide();
    // }, []);

    // console.log(locState);
    
    if(props.error) {
        return (<ErrorHandler />)
    }

    return (

        <>
            <h2>searching!</h2>

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
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
                itemClass="carousel-item-padding-40-px">

                {props.singleSearch}
            </Carousel>
        </>

    )
}
export default ShowSearch;