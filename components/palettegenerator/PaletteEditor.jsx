"use client"
import { useEffect, useRef, useState } from 'react'
import style from './paleteEditor.module.css'
import chroma from 'chroma-js'
import { ColorTypes } from '@/lib/tools'
import toast from 'react-hot-toast'

import {FiDelete} from "react-icons/fi"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {MdOutlineContentCopy} from "react-icons/md"
import {BiCheck} from "react-icons/bi"

const PaletteEditor = () => {
   
   const divRef = useRef(null)

   const[colors, setColors] = useState([1,1,1,1,1,1])
   const[palettes, setPalettes] = useState(["#833a73","#811a73","#27680d","#74b8fb","#efef6c","#e0f812","#f60928"])
   const[scaleColor, setScaleColor] = useState("#ffffff")
   const[index, setIndex] = useState(0)
   const[isCopied, setIsCopied] = useState(false)
   const[chosenColor, setchosenColor] = useState(false)
   const[colorName, setColorName] = useState("")
   const[cliked, setClicked] = useState(false)


   const handleAddColor=(e)=>{
      setScaleColor(e.target.value)
      generateColorShades(index)
   }

   const generateColorShades = (i) => {
      setchosenColor(true)
      setColorName(ColorTypes[i].name)
      setIndex(i)
      const blueColors = chroma.scale([ColorTypes[i].sampleColor, scaleColor])
        .colors(7);
        blueColors.reverse()
      setPalettes(blueColors);
   };

    const generatePalette = () => {
      const baseColor = chroma.random();
      const randomRedColors = chroma.scale([baseColor, baseColor.darken(5)])
        .colors(7);
      setPalettes(randomRedColors);
    };

    const copyToClipBoard=async(col)=>{
      try {

      await navigator.clipboard.writeText(col)
      setIsCopied(true)
      toast.success("copied")
      setTimeout(() => {
        setIsCopied(false)
      }, 2000);
         
      } catch (error) {
         console.log(error)
      //  toast.error(error)
      }
    }

   const handleColorChangeName=(c)=>{
      setchosenColor(true)
      setClicked(true)
      const blueColors = chroma.scale([c, scaleColor])
        .colors(7);
        blueColors.reverse()
      setPalettes(blueColors);
   }

  return (
    <div className={style.paletteEditor}>
       <section className={style.wrapper}>
            <div className={style.header}>
                 <button onClick={generatePalette}>Random</button>
                 <div className={style.colorTypeContainer}>
                    {ColorTypes.map((type, i)=>(
                       <div key={type.id} className={style.typecol}
                        onClick={()=>generateColorShades(i)}
                       >
                         <span style={{backgroundColor:type.sampleColor}} className={style.SampleColor}></span>
                        {type.name}</div>
                    ))}
                 </div>
            </div>  
            <div className={style.container}>
                   <div className={!chosenColor? style.chosenControl :style.colorControls}>
                    {chosenColor && <div className={style.colorAddItem}>
                             <h1 className={style.scale}>Scale Color</h1>
                         <div className={style.color}>
                             <input type="color" value={scaleColor} onChange={handleAddColor} className={style.colorinp} />
                             <input type="text" value={scaleColor} onChange={handleAddColor} className={style.colorinpt} />
                         </div>
                     </div>}
                    {chosenColor && <div className={style.ColorAddedItems}>
                        <h1> {colorName} Colors</h1>
                        <div className={style.selectColorItem}>
                         {ColorTypes[index].colors.map((color, i)=>(
                            <div className={style.colorItem} key={i}>
                                 <div className={style.colorCont} onClick={()=>handleColorChangeName(color)}>
                                     <span className={style.colorinps} style={{backgroundColor:color,}}></span>
                                 </div>
                            </div>))}
                            </div>
                     </div>}
                 </div>
                 <div className={!chosenColor? style.chosenPreview :style.preview}>
                     {palettes.map((col, i)=>(
                        <div className={style.palette} key={i}
                         style={{backgroundColor:col}}
                        >
                           <div className={style.absContent}>
                               <div className={style.iconc}
                                onClick={()=>copyToClipBoard(col)}>
                               {isCopied ? <BiCheck size={20} color='green'/> :
                               <MdOutlineContentCopy size={16} color='#fff'/>}
                               </div>
                               <span>{col}</span>
                           </div>
                     </div>
                     ))}
                 </div>
            </div>
       </section>
    </div>
  )
}

export default PaletteEditor
