import './work4.scss'
import Carousel from '../../components/carousel'
import {useEffect, useState} from 'react';
import {getPicList} from '../../api/data';

const Work4 = ({route}) => {
    const [carouselData, setCarouselData] = useState([])

    useEffect(() => {
        fetchListData()
    }, [])


    const fetchListData = async () => {
        await getPicList()
            .then(res => {
                setCarouselData(res.data)
                // console.log(11111111111, res.data)
            })
            .catch(error => {
                console.log(22222222222, error);
            });
    }

    // const carouselData = [
    //     'https://photos.smugmug.com/photos/i-THjFQhW/0/M/i-THjFQhW-M.jpg',
    //     'https://photos.smugmug.com/photos/i-bcKLnCn/0/M/i-bcKLnCn-M.j77pg',
    //     'https://photos.smugmug.com/photos/i-CqCrdG7/0/L/i-CqCrdG7-L.jpg',
    //     'https://photos.smugmug.com/All-photos/i-c9K6C6R/0/b23fed3d/M/freely-10088-M.jpg'
    // ]


    return (
        <div className='work4'>
            <Carousel carouselData={carouselData} width={400} hight={300}/>
        </div>
    )
}

export default Work4;