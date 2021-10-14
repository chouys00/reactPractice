
import './modal.scss'
import {useEffect} from 'react';
import { createPortal } from 'react-dom';

const Dialog = ({modalWidth='60%',title,children,handleLeftBtn,handleRightBtn}) => {
    const node = document.createElement('div');
    document.body.appendChild(node);

    useEffect(()=>{
        return () => {
            document.body.removeChild(node);
        };
    },[])


    return createPortal(
        <div className="modal_wrap">
            <div className="modal" style={{width: modalWidth}}>
                <div className="modal_title">{title}</div>
                <div className="modal_content">{children}</div>
                <div className="modal_btns">
                    <button onClick={handleLeftBtn}>取消</button>
                    <button onClick={handleRightBtn}>确定</button>
                </div>
            </div>
        </div>
        ,node
    )
}

export default Dialog;