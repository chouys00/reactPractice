import {useEffect} from 'react';
import './dataList.scss';

const DataList = ({listData,listItem={}}) => {


    useEffect(() => {
        console.log(111111111, listData)
    }, [])

    return (
        <div className='dataList'>
            {
                listData.map(item =>
                    listItem(item)
                )
            }
        </div>
    )

}

export default DataList;