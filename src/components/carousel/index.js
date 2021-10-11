import './carousel.scss'
import React, {useEffect, useState} from 'react';
import DotSection from './dotSection.js'
import {BsFillCaretRightFill} from "react-icons/bs";

const Carousel = ({carouselData}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const autoRound = setInterval(() => {
            handleClick()
        }, 3000)

        return () => clearInterval(autoRound);
    }, [currentIndex,carouselData])


    const handleClick = (operate = 'next') => {
        if(carouselData.length === 0) return
        if (operate === 'next') {
            setCurrentIndex(currentIndex => (currentIndex + 1) % carouselData.length)
        } else {
            setCurrentIndex(currentIndex - 1 >= 0 ? currentIndex - 1 : carouselData.length - 1)
        }
    }

    return (
        <div className='carousel'>
            <div className='slider' style={{transform: `translateX(-${600 * currentIndex}px)`}}>
                {
                    carouselData.map((item, key) =>
                        <div className='sliderItem'>
                            <img key={key} src={item.picUrl} alt="Background"/>
                        </div>
                    )
                }
            </div>
            <BsFillCaretRightFill
                className='btnRight carouselBtn'
                onClick={() => handleClick('next')}
            >
            </BsFillCaretRightFill>
            <BsFillCaretRightFill
                className='btnLeft carouselBtn'
                onClick={() => handleClick('prev')}
            >
            </BsFillCaretRightFill>
            <DotSection carouselData={carouselData} currentIndex={currentIndex}/>
        </div>
    )
}

export default Carousel;