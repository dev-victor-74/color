"use client"
import {useState } from 'react'
import style from './hex2cmyk.module.css'

const Hex2Cmyk = ({col, bg}) => {
 

  const RGB = `rgb( ${bg?.r}, ${bg?.g}, ${bg?.b} )`

  const[isCopied, setIsCopied] = useState(false)

      const copy2ClipBoard = async()=>{
        try {
        col && await navigator.clipboard.writeText(col)
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
               <div className={style.colorbox} style={{backgroundColor:RGB}}></div>
                 
                 {col && <span className={style.colorValue} onClick={copy2ClipBoard}>{col}</span>}
                { isCopied && <span className={style.copy}>Copied</span>}
            </div>
        </div>
      </div>
    </div>)
}

export default Hex2Cmyk;
