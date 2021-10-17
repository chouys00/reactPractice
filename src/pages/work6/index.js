import {useEffect, useState} from 'react';
import './work6.scss';
import Table from '../../components/table';
import Pagination from '../../components/pagination';
import {getMemberList} from '../../api/data.js'
import {resMemberList} from '../../data'

const Work6 = () => {
    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalCount, setTotalCount] = useState()

    let pageSize = 3

    let columns = [
        {
            indexName: 'name',
            value: '姓名',
            width: '200px'
        },
        {
            indexName: 'username',
            value: '帳號',
        },
        {
            indexName: 'role',
            value: '角色',
            width: '20%'
        },
        {
            value: '詳情',
            width: '200px',
            render: (item) => {
                const handleClick = () => {
                }

                return (
                    <div>
                        <button onClick={handleClick()}>詳情</button>
                    </div>
                )
            }
        },
    ]


    useEffect(() => {
        fetchListData()
    }, [])


    const fetchListData = async (page = 1, limit = 31) => {

        await getMemberList({
            _page: currentPage,
            _limit: limit,
        })
            .then(res => {
                setTableData(tableData.concat(res.data))
                setTotalCount(res.data.length)
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    return (
        <div className='work6'>
            <h1>會員管理(表格式)</h1>
            <Table
                tableData={tableData}
                columns={columns}
                currentPage={currentPage}
                pageSize={pageSize}
            >
            </Table>

            <Pagination
                currentPage={currentPage}
                pageSize={pageSize}
                totalCount={totalCount}
                changePage={page => setCurrentPage(page)}
            >
            </Pagination>
        </div>
    )

}

export default Work6;