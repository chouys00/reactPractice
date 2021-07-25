import React from 'react';
import './homePageHeader.scss';
import { Link,Route,withRouter  } from 'react-router-dom';

const homePageHeader = () => {
    return (
        <header className={"app-header"}>
            <Link to="/"><span>Home</span></Link>
            <Link to="/works"><span>Works</span></Link>
            <Link to="/workPageDetail"><span>workPageDetail</span></Link>
      </header> 
    )
}

export default homePageHeader;