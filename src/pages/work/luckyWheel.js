import './luckyWheel.scss'
import {useState} from 'react';
// import { renderRoutes } from 'react-router-config';
import wheelPicture from '../../assets/luckyWheel/obj_02.png'
import startPicture from '../../assets/luckyWheel/obj_01.png'

const Work = () => {
    const [start, setStart] = useState(false)
    const [result, setResult] = useState(null)
    const [isAnnounce, setIsAnnounce] = useState(false)
    const [rotateStyle, setRotateStyle] = useState({})


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


    // let wheelStyle={
    //     // transform:'rotate('+deg+'deg)',transition:a
    //     // width: "10px",
    //     transform: "rotate(900deg)"
    // }

    const getResult = (min, max) => Math.ceil((Math.random() * (max - min) + min));

    const startFunc = () => {
        setStart(true)
        // infiniteRotate()


        // 模擬 api 回傳開獎結果
        // setTimeout(() => {
        //     setResult(getResult(1, 6))
        //     setStart(false)
        //
        //
        // }, 1000)


        // setTimeout(() => {
        //     setStart(false)
        // }, 3000)
    }

    // let rotateDeg = 360

    const infiniteRotate = () => {
        const el = document.getElementById('wheel')
        // el.style.transition = 'none'
        // el.style.transform = `none`
        // el.style.transition = 'all 1000ms'
        // el.style.transform = `rotate(7200deg)`

        setTimeout(() => {
            // setStart(false)
            el.style.transition = 'none'
            el.style.transform = `none`
            el.style.transition = 'all 5500ms'
            el.style.transform = `rotate(7200deg)`

        }, 1000)

        // const el = document.getElementById('wheel')
        //
        // el.style.transition = 'all 1s'
        // let rotateDeg = 360;
        // el.style.transform = "rotate(" + rotateDeg + "deg)"
        //
        // setTimeout(() => {
        //     el.style.transition = 'none'
        //     el.style.transform = `none`
        //     // if(isAnnounce){
        //     infiniteRotate()
        //     // }
        // }, 1000)
    }


    return (
        <div className='luckyWheel'>
            <div>
                <img
                    id="wheel"
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
        </div>
    )
}

export default Work;