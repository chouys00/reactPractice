import React from 'react';
import './homePageHeader.scss';
import { Link,useHistory   } from 'react-router-dom';

const homePageHeader = () => {
    // console.log(1111111111111,this.props)
    // let history = useHistory();
    // function switchRoute(route){
    //     history.push("/")
    // }

    return (
        <header className={"app-header"}>
            <Link to="/"><span>Home</span></Link>
            <Link to="/luckyWheel"><span>輪盤</span></Link>
            <Link to="/work2"><span>Work2</span></Link>
            {/* <Link to="/work/workDetail"><span>workDetail</span></Link> */}
      </header> 
    )
}

export default homePageHeader;