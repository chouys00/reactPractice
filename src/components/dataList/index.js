import {useEffect} from 'react';
import './dataList.scss';

const DataList = ({listData,listItem={}}) => {


    useEffect(() => {
    }, [])

    return (
        <div className='dataList'>
            {
                listData.map((item,index) =>
                    listItem(item,index)
                )
            }
        </div>
    )

}

export default DataList;