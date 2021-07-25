
import './luckyWheel.scss'
import React, {useEffect} from 'react';
import { renderRoutes } from 'react-router-config';


const work = ({route}) => {
    return (
        <>
            <img src="@/assets/luckyWheel/obj_01.png"></img>
            {/* {renderRoutes(route.routes)} */}
        </>    
    )
}

export default work;