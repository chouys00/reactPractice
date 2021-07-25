import React from 'react';
import './homePageHeader.scss';
import { Link  } from 'react-router-dom';

const homePageHeader = () => {
    return (
        <header className={"app-header"}>
            <Link to="/"><span>Home</span></Link>
            <Link to="/work"><span>Work</span></Link>
            <Link to="/work/workDetail"><span>workDetail</span></Link>
      </header> 
    )
}

export default homePageHeader;