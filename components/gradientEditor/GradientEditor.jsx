"use client"

import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import style from './gradient.module.css'
import{FaRandom} from "react-icons/fa"
import {FiDownload,FiCode} from "react-icons/fi"
import{MdAdd} from "react-icons/md"
import toast from 'react-hot-toast'


const GradientEditor = () => {

   const gradientRef = useRef(null)  

   const[addColor3, setAddColor3] = useState(false)
   const[gradientType, setGradientType] = useState("linear")
   const[gradientDirection, setGradientDirection] = useState("ellipse")

   const[color1, setColor1] = useState("#34a4e2")
   const[color2, setColor2] = useState("#b157b9")
   const[color3, setColor3] = useState("#9df7f5")

   const[slider1, setSlider1] = useState("20")
   const[slider2, setSlider2] = useState("70")
   const[slider3, setSlider3] = useState("80")

   const[gradient, setGradient] = useState("")
   const[linearDirection, setLinearDirection] = useState(45)
   const[boxType, setBoxType] = useState("box")

   const randomGradient=()=>{
      const hex1 =`#${Math.floor(Math.random()*0xffffff).toString(16).padStart(6, "0")}`  
      setColor1(hex1)
      const hex2 = `#${Math.floor(Math.random()*0xffffff).toString(16).padStart(6, "0")}`  
      setColor2(hex2)
      const hex3 = `#${Math.floor(Math.random()*0xffffff).toString(16).padStart(6, "0")}` 
      setColor3(hex3)
   }


   useEffect(()=>{
       const grd = `${gradientType === "linear"? "linear" : "radial"}-gradient(${gradientType ==="radial"? gradientDirection : linearDirection + "deg"},
         ${color1} ${slider1}%, ${color2}  ${slider2}% ${addColor3? ',' + color3 + " " + slider3 + "%": ""})`
       setGradient(grd)
   },[color1,color2,color3,linearDirection,gradientType,addColor3, gradientDirection,slider1,slider2,slider3])

  console.log(gradient)
  const handlegradientType=(e)=>{
    setGradientType(e.target.value)
  }
   const handleAddColor3=()=>{
     setAddColor3(prev=>!prev)
   }

   const copy2clipBoard=async()=>{
     try {
        await navigator.clipboard.writeText(gradient)
        toast.success("copied")
     } catch (error) {
        console.log("failed to copy to clipboard")
     }
   }

   const handleCapture = async () => {
    try {
       const canvas = await html2canvas(gradientRef.current);
       const dataUrl = canvas.toDataURL();
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "image.png";
      a.click()
    } catch (error) {
       console.error('Error capturing screenshot:', error);
    }
   };

  return (
    <section className={style.gradientEditor}>
         <div className={style.wrapper}>
            <div className={style.controls}>
                <div className={style.direction}>
                    <span>Direction:</span>
                    <input type="number" value={linearDirection}
                     onChange={e=>setLinearDirection(e.target.value)}
                    />
                </div>
                <div className={style.colorstops}>
                    <div className={style.colorstopwrapper}>
                        <span>{color1}</span>
                        <input type="color" value={color1} onChange={e=>setColor1(e.target.value)} />
                    </div>
                    <div className={style.colorstopwrapper}>
                        <span >{color2}</span>
                        <input type="color" value={color2} onChange={e=>setColor2(e.target.value)}/>
                    </div>
                  { addColor3 && <div className={style.colorstopwrapper} >
                        <span>{color3}</span>
                        <input type="color" value={color3} onChange={e=>setColor3(e.target.value)} />
                    </div>}
                    <button className={style.colorAddBtn} onClick={handleAddColor3}>
                        <span>
                            <MdAdd size={16} color='#fff' />
                        </span>
                    </button>
                </div>
                <div className={style.gradientDirection}>
                    <div className={style.radiobox}>
                        <input type="radio" name='type'
                         checked={gradientType ==="linear"}
                         value="linear" 
                         onChange={handlegradientType}
                         />
                        <span>Linear</span>
                    </div>
                    <div className={style.radiobox}>
                        <div className={style.radialRadio}>
                          <input type="radio" name='type' value="radial"
                          onChange={handlegradientType}
                          />
                         <span>Radial</span>
                     </div>
                        { gradientType === "radial" &&
                        <select className={style.selectRadial} value={gradientDirection} onChange={e=>setGradientDirection(e.target.value)}>
                            <option value="ellipse">Ellipse</option>
                            <option value="circle">Circle</option>
                        </select>}
                    </div>
                </div>
                <div className={style.colorStopControl}>
                    <div className={style.heading}>
                         <h1>Color Stops</h1>
                    </div>
                    <div className={style.colorItems}>
                     <div className={style.colorItem}>
                         <span className={style.cstoptitle}>Color 1</span>
                        <div className={style.color1}>
                           <span>{slider1}%</span>
                           <input type="range"min="0" max="100" onChange={e=>setSlider1(e.target.value)} />
                        </div>
                     </div>
                     <div className={style.colorItem}>
                     <span className={style.cstoptitle}>Color 2</span>
                        <div className={style.color1}>
                           <span>{slider2}%</span>
                           <input type="range"min="0" max="100"onChange={e=>setSlider2(e.target.value)} />
                        </div>
                     </div>
                    {addColor3 && <div className={style.colorItem}>
                     <span className={style.cstoptitle}>Color 3</span>
                        <div className={style.color1}>
                           <span>{slider3}%</span>
                           <input type="range"min="0" max="100"onChange={e=>setSlider3(e.target.value)} />
                        </div>
                     </div>}
                    </div>
                </div>
               
            </div>
            <div className={style.preview}>
                 <div className={style.previewBox}
                  style={{backgroundImage:gradient}}
                  ref={gradientRef}
                 />
                 <div className={style.previewType}>
                    <div className={style.buttons}>
                     <button className={style.btn1} onClick={randomGradient}>
                        <FaRandom/> <span>Random</span>
                    </button>
                    </div>
                    <div className={style.iconWrapper}>
                    <FiCode size={20} color='blue'
                     className={style.codeAndDownload} 
                     onClick={copy2clipBoard}
                     />
                    <FiDownload size={18} color='blue'
                     onClick={handleCapture} 
                     className={style.codeAndDownload}
                     />
                 </div>
             </div>
            </div>
         </div>
    </section>
  )
}

export default GradientEditor
