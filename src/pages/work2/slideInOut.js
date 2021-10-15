import './slideInOut.scss'
import SlideSection from "./slideSection"
import React, {useEffect, useState} from 'react'
import {assertAnyTypeAnnotation} from '@babel/types'
import Modal from '../../components/modal'

const SlideInOut = () => {
    const [openSlider, setOpenSlider] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const handleRightBtn = () => {
        setOpenModal(false);
    }
    const handleLeftBtn = () => {
        setOpenModal(false);
    }


    return (
        <>
            <div className='slideInOut'>
                <button onClick={() => {
                    setOpenSlider(!openSlider)
                }}>{
                    openSlider ? "closeSlider" : "openSlider"
                }</button>
                <button onClick={() => {
                    setOpenModal(true)
                }}>{
                    openModal ? "closeModal" : "openModal"
                }</button>
            </div>
            <SlideSection show={openSlider}></SlideSection>

            {
                openModal && <Modal
                    title="我是抬頭"
                    dialogWidth="60%"
                    handleLeftBtn={handleLeftBtn}
                    handleRightBtn={handleRightBtn}
                >
                    <span>吃飽撐著的內容</span>
                </Modal>
            }
        </>
    )
}

export default SlideInOut;