import './slideInOut.scss'
import SlideSection from "./slideSection"
import React,{ useEffect, useState } from 'react'
import { assertAnyTypeAnnotation } from '@babel/types'

const SlideInOut = () =>{
    const [open,setOpen] = useState(false)

    
    useEffect(()=>{
        let obj = []
        console.log(1111111,JSON.stringify(obj)==="{}")
    })

    
    return(
        <>
            <div className='slideInOut'>
                <button onClick={()=>{setOpen(!open)}}>{
                    open? "close":"open"
                }</button>
            </div>
            <SlideSection show={open}></SlideSection>
        </>
    )
}

export default SlideInOut;