

import React, {useEffect} from 'react';
import { renderRoutes } from 'react-router-config';

const work = ({route}) => {
    return (
        <div>
            work
            {renderRoutes(route.routes)}
        </div>    
    )
}

export default work;