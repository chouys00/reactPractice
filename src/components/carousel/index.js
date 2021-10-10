import './carousel.scss'
import React, {useEffect, useState} from 'react';
import DotSection from './dotSection.js'
import {BsFillCaretRightFill} from "react-icons/bs";

const Carousel = ({carouselData}) => {
    const [currentIndex,setCurrentIndex] = useState(0)

    useEffect(() => {
        console.log(111111111111, carouselData)
    }, [])


    const handleClick = (operate) => {
        // console.log(2222222222, operate)
    }

    return (
        <div className='carousel'>
            <div className='slider'>
                {
                    carouselData.map((item,index) =>
                        <div className='sliderItem'>
                            <img key={index} src={item} alt="Background"/>
                        </div>
                    )
                }
            </div>
            <BsFillCaretRightFill
                className='btnRight carouselBtn'
                onClick={() => handleClick('next')}>
            </BsFillCaretRightFill>
            <BsFillCaretRightFill
                className='btnLeft carouselBtn'
                onClick={() => handleClick('prev')}>
            </BsFillCaretRightFill>
            <DotSection carouselData={carouselData} currentIndex={currentIndex}/>
        </div>
    )
}

export default Carousel;