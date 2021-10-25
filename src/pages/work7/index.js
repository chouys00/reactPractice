import {useState, useEffect} from 'react';
import {BsClock} from "react-icons/bs";


const data = 1 * 60

const Work7 = () => {
    const [seconds, setSeconds] = useState(null)

    useEffect(()=>{
        fecthData()
    },[])


    useEffect(() => {

        if(seconds===null) return


        const countDownTimer = setInterval(() => {
            setSeconds(seconds - 1);
        }, 1000);


        if(seconds<=0){
            console.log(111111111111)
            fecthData()
        }


        return () => clearInterval(countDownTimer);
    }, [seconds])


    const fecthData = () => {
        setTimeout(() => {
            setSeconds(data)
        }, 1000)
    }


    return (
        <div className='flex-1 justify-center items-center'>
            <div className="h-24 w-1/6 m-auto bg-gray-400 flex justify-center items-center">
                <BsClock className='h-16 w-16'/>
                <div className='text-6xl ml-4'>
                    {new Date(seconds * 1000).toISOString().substr(14, 5)}
                </div>
            </div>
        </div>
    )

}

export default Work7;