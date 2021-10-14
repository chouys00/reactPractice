import './luckyWheel.scss'
import {useState} from 'react';
// import { renderRoutes } from 'react-router-config';
import wheelPicture from '../../assets/luckyWheel/obj_02.png'
import startPicture from '../../assets/luckyWheel/obj_01.png'

const Work = ({route}) => {
    const [start, setStart] = useState(false)
    const [result, setResult] = useState(null)
    const [style,setStyle] = useState()

    // const [prizeList,setPrizeList] = useState([])


    let prizeList = [
        {
            label: '謝謝參與',
            money: '0'
        },
        {
            label: '¥5',
            money: '5'
        },
        {
            label: '謝謝參與',
            money: '0'
        },
        {
            label: '¥66',
            money: '66'
        },
        {
            label: '謝謝參與',
            money: '0'
        },
        {
            label: '¥10',
            money: '10'
        },
    ]

    const getResult = (min, max) => Math.random() * (max - min) + min;


    // let wheelStyle={
    //     // transform:'rotate('+deg+'deg)',transition:a
    //     // width: "10px",
    //     transform: "rotate(900deg)"
    // }

    const startFunc = () => {
        console.log(111111111111,getResult(0,5))
        setStart(true)
        // setTimeout(() => {
        //     setStart(false)
        // }, 3000)
    }

    return (
        <div className='luckyWheel'>
            <div>
                <img
                    id="whell"
                    className={`wheelPic ${start ? 'isRotate' : ''}`}
                    src={wheelPicture}
                    alt="wheelPicture"
                    style={{}}
                >
                </img>
                <img
                    className='startPic'
                    onClick={startFunc}
                    src={startPicture}
                    alt="startPicture"
                >
                </img>
            </div>
            {/* {renderRoutes(route.routes)} */}
        </div>
    )
}

export default Work;