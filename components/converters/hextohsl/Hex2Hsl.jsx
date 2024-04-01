"use client"
import { useEffect, useState } from 'react'
import style from './hex2hsl.module.css'

const Hex2Hsl = ({color, hsl }) => {
 

  const[isCopied, setIsCopied] = useState(false)

  console.log(color, hsl)
      
      const HSL = `hsl( ${hsl?.h}, ${hsl?.s}%, ${hsl?.l}% )`

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

export default Hex2Hsl;
