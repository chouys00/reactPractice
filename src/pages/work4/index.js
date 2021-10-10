
import './work4.scss'
import Carousel from '../../components/carousel'
import React from 'react';

const Work4 = ({route}) => {

    const carouselData = [
        'https://photos.smugmug.com/photos/i-THjFQhW/0/M/i-THjFQhW-M.jpg',
        'https://photos.smugmug.com/photos/i-bcKLnCn/0/M/i-bcKLnCn-M.jpg',
        'https://photos.smugmug.com/photos/i-CqCrdG7/0/L/i-CqCrdG7-L.jpg',
        'https://photos.smugmug.com/All-photos/i-c9K6C6R/0/b23fed3d/M/freely-10088-M.jpg'
    ]

    return (
        <div className='work4'>
            <Carousel carouselData={carouselData} width={400} hight={300}/>
        </div>
    )
}

export default Work4;