"use client"
import { useState } from 'react'
import style from './hex2rgb.module.css'

const Hex2Rgb = ({col}) => {
 
  const[isCopied, setIsCopied] = useState(false)


  const RGB = `rgb( ${col?.r}, ${col?.g}, ${col?.b} )`

   const copy2ClipBoard = async()=>{
    try {
    RGB && await navigator.clipboard.writeText(RGB)
     setIsCopied(prev => !prev)

     setTimeout(()=>{
      setIsCopied(prev => !prev)
     }, 2000)
    } catch (error) {
      console.log(error)
    }
 }


  return (
    <div className={style.hex2Rgb}>
      <div className={style.colorWrapper}>
        <div className={style.rgbcolor}>
            <h1>RGB Color</h1>
            <div className={style.convertedRGB}>
               <div className={style.colorbox} style={{backgroundColor: RGB}}></div>
            { col && <span className={style.colorValue} onClick={copy2ClipBoard}>{RGB} </span>}
                { isCopied && <span className={style.copy}>Copied</span>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hex2Rgb
