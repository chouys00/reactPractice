import React from 'react';


const DotSection = ({carouselData, currentIndex}) => {
    return (
        <div className='dotSection'>
            {
                carouselData.map((value, key) =>
                    <div key={key}
                         className={`
                              dot ${currentIndex === key ?
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