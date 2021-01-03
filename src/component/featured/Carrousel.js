import React from 'react'
import Slider from "react-slick"

import slide_four from '../../resources/images/slide_four.jpg'
import slide_nine from '../../resources/images/slide_nine.JPG'
import slide_eight from '../../resources/images/slide_eight.JPG'






const Carrousel = () => {

    const settings ={
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return(
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_nine})`,
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>
                <div>
                <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_four})`,
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>
                
                <div>
                <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_eight})`,
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                
            </Slider>
        </div>
    )


}
export default Carrousel;