import {useEffect, useState} from 'react';
import './work6.scss';
import Table from '../../components/table';
import {getListData} from '../../api/data.js'

const Work6 = () => {
    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    let columns = [
        {
            key: 'name',
            value: '姓名'
        },
        {
            key: 'username',
            value: '姓名'
        },
        {
            key: 'role',
            value: '角色'
        },
        {
            value: '詳情',
            content: () => {
                <div>
                    <button>詳情</button>
                </div>
            }
        },
    ]

    useEffect(() => {
        fetchListData()
    }, [])

    const fetchListData = async (page = 1, limit = 10) => {
        await getListData({
            _page: currentPage,
            _limit: limit,
        })
            .then(res => {
                console.log(111111111111, res.data)
                setTableData(tableData.concat(res.data))
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    return (
        <div className='work6'>
            <h1>會員管理(表格式)</h1>
            <Table tableData={tableData} columns={columns}></Table>
        </div>
    )

}

export default Work6;