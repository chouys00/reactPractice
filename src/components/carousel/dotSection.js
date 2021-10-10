import React from 'react';


const DotSection = ({carouselData, currentIndex}) => {
    return (
        <div className='dotSection'>
            {
                carouselData.map((value, index) =>
                    <div key={index}
                         className={`
                              dot ${currentIndex === index ?
                             'dot--active' :
                             ''
                         }`}
                    />
                )
            }
        </div>
    )
}

export default DotSection;