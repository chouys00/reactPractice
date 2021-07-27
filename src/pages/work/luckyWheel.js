
import './luckyWheel.scss'
import React, {useState,useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import wheel from '../../assets/luckyWheel/obj_02.png'
import start from '../../assets/luckyWheel/obj_01.png'

const Work = ({route}) => {
    const [a,seta]=useState(0)

    let wheelStyle={
        // transform:'rotate('+deg+'deg)',transition:a
        // width: "10px",
        transform: "rotate(900deg)"
    }

    const startFunc = ()=>{
        console.log(111111111111,)
    }

    return (
        <div className='luckyWheelWrap'>
            <div>
                <img className='wheelPic' src={wheel} style={wheelStyle}></img>
                <img className='startPic' src={start} onClick={startFunc}></img>
            </div>
            {/* {renderRoutes(route.routes)} */}
        </div>
    )
}

export default Work;