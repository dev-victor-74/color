"use client"
import { useEffect, useState } from 'react'
import style from './rgbtohsl.module.css'

const RgbToHsl = ({color,hsl}) => {

  const[isCopied, setIsCopied] = useState(false)

      const copy2ClipBoard = async()=>{
        try {
        col && await navigator.clipboard.writeText()
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
            <h1>HSL Color</h1>
            <div className={style.convertedRGB}>
               <div className={style.colorbox} style={{backgroundColor:""}}></div>
                 
                 {<span className={style.colorValue} onClick={copy2ClipBoard}>{}</span>}
                { isCopied && <span className={style.copy}>Copied</span>}
            </div>
        </div>
      </div>
    </div>)
}

export default RgbToHsl;