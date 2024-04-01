"use client"
import { useEffect, useState } from 'react'
import GradientBox from '../gradientbox/GradientBox'
import Heading from '../heading/Heading'
import {BiSolidColor} from "react-icons/bi"
import style from './gradient.module.css'
import Loading from '../loading/Loading'
import { gradient_one } from '@/lib/gradient' 
import { gradient_two } from '@/lib/gradient' 

const Gradient = () => {

    const color_nums = new Array(402).fill(1)

    const[hex1, setHex1] = useState([])
    const[hex2, setHex2] = useState([])
    
    const[isMounted, setIsMounted] = useState(false)

    
    const generateHex=()=>{

        const color1 = color_nums.map(c=>{
            const hex = `#${Math.floor(Math.random()* 0xffffff).toString(16).padStart(6, "0")}`
            return hex
        })
        
         setHex1(color1)
         
         const color2 = color_nums.map(c=>{
            const hex = `#${Math.floor(Math.random()* 0xffffff).toString(16).padStart(6,"0")}`
            return hex
        })
        setHex2(color2)

     
    }
  
     useEffect(()=>{
        generateHex()
        setIsMounted(true)
     },[])

     if(!isMounted){
      return (
          <div className={style.loader}>
              <Loading/>
          </div>
      )
   }

  return (

    <div className={style.gradient}>
        <Heading
          title="Color Gradient"
          desc="Browse through our carefully selected color gradient"
          Icon={<BiSolidColor size={40} color='#f8c30e'/>}
        />
        <div className={style.wrapper}>
            {color_nums.map((color, index)=>(
            <GradientBox
              hex1 ={gradient_one}
              hex2 ={gradient_two}
              key={index}
              index={index}
            />))}
        </div>
    </div>

  )
}

export default Gradient
