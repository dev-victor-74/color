"use client"
import { useEffect, useState } from 'react'
import style from './rgbtocmyk.module.css'

const RgbToCmyk = ({col, cmyk}) => {
 

  const[isCopied, setIsCopied] = useState(false)

      
      const HSL = `cmyk( ${cmyk?.h}, ${cmyk?.s}%, ${cmyk?.l}% )`

      const copy2ClipBoard = async()=>{
        try {
        col && await navigator.clipboard.writeText(HSL)
         setIsCopied(prev => !prev)
  
         setTimeout(()=>{
          setIsCopied(prev => !prev)
         }, 2000)
        } catch (error) {
          console.log(error)
        }
     }
 console.log(HSL)
  return (
    <div className={style.hex2Rgb}>
      <div className={style.colorWrapper}>
        <div className={style.rgbcolor}>
            <h1>HSL Color</h1>
            <div className={style.convertedRGB}>
               <div className={style.colorbox} style={{backgroundColor:HSL}}></div>
                 
                 { col && <span className={style.colorValue} onClick={copy2ClipBoard}>{HSL}</span>}
                { isCopied && <span className={style.copy}>Copied</span>}
            </div>
        </div>
      </div>
    </div>)
}

export default RgbToCmyk;