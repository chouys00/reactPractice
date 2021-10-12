import {useEffect, useState, useRef} from 'react';
import './work5.scss';
import DataList from '../../components/dataList';
import {getListData} from '../../api/data.js'

const Work5 = () => {
    const [listData, setListData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const listBoxNode = useRef();


    useEffect(() => {
        fetchListData()
    }, [currentPage])


    const handleScroll = () => {
        const listBoxEl = listBoxNode.current
        if (listBoxEl) {
            const scrollPos = listBoxEl.scrollTop + listBoxEl.clientHeight;
            const boxHeight = listBoxEl.scrollHeight;

            // 滾過的距離加上自己元素的高度，大於等於可滾動範圍的高度
            if ((scrollPos >= boxHeight) && fetchListData) {
                setCurrentPage(currentPage + 1)
            }
        }
    }

    const fetchListData = async (page = 1, limit = 10) => {
        await getListData({
            _page: currentPage,
            _limit: limit,
        })
            .then(res => {
                setListData(listData.concat(res.data))
            })
            .catch(error => {
                console.log('error', error);
            });
    }


    return (
        <div className='work5'>
            <div className='sideBar'>
                sideBar
            </div>
            <div
                className='listBox'
                ref={listBoxNode}
                onScroll={handleScroll}
            >
                <DataList listData={listData} listItem={listItem}/>
            </div>
        </div>
    )

}

export default Work5;





const listItem = (item) => {
    return (
        <div className='dataList_item'>
            <div className='dataList_item_title'>{item.id}</div>
            <div className='dataList_item_content'>{item.title}</div>
            <div className='dataList_item_content'>{item.thumbnailUrl}</div>
        </div>
    )
}
