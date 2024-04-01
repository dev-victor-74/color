"use client"
import { useEffect, useState } from 'react'
import Hex2Cmyk from '../converters/hextocmyk/Hex2Cmyk'
import Hex2Hsl from '../converters/hextohsl/Hex2Hsl'
import Hex2Rgb from '../converters/hextorgb/Hex2Rgb'
import style from './content.module.css'


const ContentHex = () => {

  const [color, setColor] = useState("#150f4b")

  const [hsl, setHsl] = useState(null)
  const [rgb, setRgb] = useState(null)
  const [cmyk, setCmyk] = useState(null)

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  const hexToRgb =()=>{
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
    if(result){

       const r = parseInt(result[1],16);
       const g = parseInt(result[2],16);
       const b = parseInt(result[3],16);

       setRgb({r,g,b})
    }
    else{
      console.log("invalid hex color")
    }}

    const hexToHsl =()=>{
      const hex = color.replace("#", "")
      
      const r = parseInt(hex.slice(0,2), 16) / 255;
      const g = parseInt(hex.slice(2,4), 16) / 255;
      const b = parseInt(hex.slice(4,6), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);

      let h =0;
      if( max === min){
       h = 0;
      }
      else if(max === r) {
        h = 60 * ((g - b) / (max - min));
      }
      else if(max === g) {
       h = 60 * (2 + (b - r) / (max - min));
     }
     else if(max === b) {
       h = 60 * (4 + (r - g) / (max - min));
     }

     if(h < 0){
       h += 360;
     }

     const l = (max + min) / 2;
     const s = max === min ? 0 : l <= 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);

     return {
       h: Math.round(h),
       s: Math.round(s * 100),
       l: Math.round(l * 100)
     }
   }
 
   // hex to cmyk
   const hexToCmyk =()=>{
    const hex = color.replace("#", "")
    
    const r = parseInt(hex.slice(1,3), 16) / 255;
    const g = parseInt(hex.slice(3,5), 16) / 255;
    const b = parseInt(hex.slice(5,7), 16) / 255;

   const k = 1 - Math.max(r,g,b)
   const c = (1 - r - k) / (1 - k)
   const m = (1 - g - k) / (1 - k)
   const y = (1 - b - k) / (1 - k)

   const cmyk = `C: ${Math.round(c * 100)}% M: ${Math.round(m * 100)}% Y: ${Math.round(y * 100)}% K: ${Math.round(k * 100)}%`;

   return cmyk
    
 }

  useEffect(()=>{
   const c =  hexToCmyk()
   setCmyk(c)
    const h = hexToHsl()
    setHsl(h)
     hexToRgb()

     return ()=>{
      hexToCmyk()
      hexToHsl()
      hexToRgb()
     }
  },[color])

  return (
    <div className={style.content}> 
         <div className={style.preview} style={{backgroundColor: color}}/>
           
          <div className={style.inputcolor}>
             <div className={style.wrapper}>
                <div className={style.color}>
                   <input type="color" value={color} onChange={handleColorChange}/>
                </div>
                <input type="text"  value={color} onChange={handleColorChange}/>
             </div>
         </div>
         <div className={style.container}>
             <Hex2Rgb col ={rgb} />
             <Hex2Hsl col ={hsl} />
             <Hex2Cmyk col ={cmyk} bg = {rgb} />
         </div>
    </div>
  )
}

export default ContentHex
