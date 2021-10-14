

import {useEffect,Component} from 'react';
import './table.scss';


const TableContainer = (Table) => {
    return class TableContainer extends Component{
        render() {
            return (
                <Table {...this.props} />
            );
        }
    }


    return(
        <div className='table'>
            <tr className='tableTitle'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </div>
    )

}

export default TableContainer;