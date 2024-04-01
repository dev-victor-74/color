"use client"
import React, { useEffect, useState } from 'react'
import Heading from '../heading/Heading'
import style from "./pallete.module.css"
import PalleteBox from '../palletebox/PalleteBox'
import Loading from '../loading/Loading'
import {AiOutlineBgColors} from "react-icons/ai"

const Pallete = () => {
  
    const color_nums = new Array(9).fill(1)

    const[hex1, setHex1] = useState([])
    const[hex2, setHex2] = useState([])
    const[hex3, setHex3] = useState([])
    const[hex4, setHex4] = useState([])
    const[hex5, setHex5] = useState([])
    
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
         const color3 = color_nums.map(c=>{
            const hex = `#${Math.floor(Math.random()* 0xffffff).toString(16).padStart(6,"0")}`
            return hex
        })
         setHex3(color3)
         const color4 = color_nums.map(c=>{
            const hex = `#${Math.floor(Math.random()* 0xffffff).toString(16).padStart(6,"0")}`
            return hex
        })
         setHex4(color4)
         const color5 = color_nums.map(c=>{
            const hex = `#${Math.floor(Math.random()* 0xffffff).toString(16).padStart(6,"0")}`
            return hex
        })
         setHex5(color5)
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
    <div className={style.palleteContainer}>
        <Heading
         title="Color Palletes"
         desc ="Explore thousands of beautiful color palletes"
         generateHex ={generateHex}
         Icon ={<AiOutlineBgColors size={40} color='blue' />}
        />
        <div className={style.wrapper}>
            {color_nums.map((col, index)=>(
                <PalleteBox
                  hex1={hex1[index]}
                  hex2={hex2[index]}
                  hex3={hex3[index]}
                  hex4={hex4[index]}
                  hex5={hex5[index]}
                  key={index}
                />
            ))}
        </div>
    </div>
  )
}

export default Pallete
