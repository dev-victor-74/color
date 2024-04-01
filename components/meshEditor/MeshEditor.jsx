 "use client"

import { useEffect, useRef, useState } from 'react'
import style from './meshEditor.module.css'
import html2canvas from 'html2canvas'
import toast from 'react-hot-toast'

import {MdAdd} from "react-icons/md"
import {FiDelete} from "react-icons/fi"
import {FiDownload} from "react-icons/fi"
import {FiCode} from "react-icons/fi"
import{BiCheck} from "react-icons/bi"
import {GrPowerCycle} from "react-icons/gr"
import{MdOutlineCancel,MdOutlineContentCopy} from "react-icons/md"


const MeshEditor = () => {

  const refDiv = useRef(null);

  const [colors, setColors] = useState(["#8c71c3","#5b0643","#121266","#ff5c09","#f5fcb9","#03f6dc","#073f3d"]);
  const [newHex, setNewHex] = useState("#5b0643");
  const [bgc, setBgc] = useState("#2c16ff");
  const [hsl, setHsl] = useState([]);
  const [hslArr, setHslArr] = useState([]);
  const [randomNum1, setRandomNum1] = useState([]);
  const [randomNum2, setRandomNum2] = useState([]);
  const [isRandom, setIsRandom] = useState(false);
  const [copyModal, setCopyModal] = useState(false);
  const [copied, setCopied] = useState(false);

 //55, 49, 96, 65, 45, 19, 65
 //93, 52, 67, 77, 37, 15, 87

  const _MAX = 100;
  const _MIN = 1;

  const handleCapture = async () => {
    try {
       const canvas = await html2canvas(refDiv.current);
       const dataUrl = canvas.toDataURL();
      //  setImage(dataUrl);
      const a = document.createElement("a");
      console.log(a)
      a.href = dataUrl;
      a.download = "image.png";
      a.click()
      console.log(dataUrl)
    } catch (error) {
       console.error('Error capturing screenshot:', error);
    }
   };

 const handleColorChange=(e, index)=>{
  setIsRandom(false);

   const temp = [...colors]
   temp[index] = e.target.value
    setColors(temp)
 }

 const handleNewColor=(e)=>{
    setIsRandom(false);
    setNewHex(e.target.value)
 }
 const handleBgc=(e)=>{
  setBgc(e.target.value)
}

const randomBgc=()=>{
   const randombg = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`
   setBgc(randombg)
}

const genRandomColor =()=>{
  setIsRandom(true)
  const randomHex = colors.map(c=>(
      `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`
    ))
    setColors(randomHex);

    const r1  =  colors.map(c =>(GenRandomNum()));
    const r2  =  colors.map(c =>(GenRandomNum()))
    setRandomNum1(r1)
    setRandomNum2(r2)
    randomBgc()
  }
  
  const GenRandomNum =()=>{
    setIsRandom(true)
    const nums = Math.floor(Math.random() * (_MAX - _MIN + 1)) + _MIN;
    return nums;
  }

  useEffect(()=>{
    const r1  =  colors.map(c =>GenRandomNum());
    const r2  =  colors.map(c =>GenRandomNum())
    setRandomNum1(r1)
    setRandomNum2(r2)
  },[]);


 const hexToHsl =(col)=>{
   const hex = col.replace("#", "")
   
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
  
  const hsl_color = `hsl(${Math.round(h)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%)`;
  return  hsl_color;
}
 const handleAddcolor =()=>{
  setIsRandom(false);
  const _colors = [...colors];

  _colors.push(newHex);
  setColors(_colors);
  let _nums1 = [...randomNum1]
  let _nums2 = [...randomNum2]
  const r1  =  GenRandomNum();
  const r2  =  GenRandomNum();
  _nums1.push(r1)
  _nums2.push(r2)
  setRandomNum1(_nums1)
  setRandomNum2(_nums2)
}


const handleDeleteColor =(id)=>{
  setIsRandom(false);
  const _colors = [...colors];

  _colors.splice(id,1);
  setColors(_colors);

  let _nums1 = [...randomNum1]
  let _nums2 = [...randomNum2]
  _nums1.splice(id, 1)
  _nums2.splice(id, 1)
  setRandomNum1(_nums1)
  setRandomNum2(_nums2)
}

 const dragItem = useRef(null);
 const dragOverItem = useRef(null);

 const handleSort =()=>{

   setIsRandom(false);
   let _items = [...colors];

   const dragItemContent = _items.splice(dragItem.current, 1)[0];

   _items.splice(dragOverItem.current, 0, dragItemContent);
   
   dragItem.current = null;
   dragOverItem.current = null;
   setColors(_items);
}

const GenRandomMesh=()=>{
  setIsRandom(true)
     const bgImage = hsl.map((col, index)=>(
    `radial-gradient(at ${GenRandomNum()}% ${GenRandomNum()}%, ${col} 0px, transparent 50%)`
    ));
    setHslArr(bgImage)
}

const GenMesh=()=>{
  const bgImage = hsl.map((col, index)=>(
    `radial-gradient(at ${randomNum1[index]}% ${randomNum2[index]}%, ${col} 0px, transparent 50%)`
    ))
    setHslArr(bgImage)
}
useEffect(()=>{

  isRandom? GenRandomMesh() : GenMesh()
  return()=>{
     GenRandomMesh();
     GenMesh()
  }
}, [hsl,colors])

const cssCode =`background-color: ${bgc};
background-image: ${hslArr.join(",")};`

const copyToClipBoard=async()=>{
   try {
      await navigator.clipboard.writeText(cssCode)
      setCopied(true)
      toast.success("copied")
      setTimeout(() => {
        setCopied(false)
      }, 2000);
   } catch (error) {
     console.log(error)
   }
}

useEffect(()=>{
  setIsRandom(false)
  const HSL =  colors.map(c=>(
    hexToHsl(c)
  ));
  setHsl(HSL) 
  return()=>{ colors.map(c=>(
    hexToHsl(c)
  ));}   
},[colors])


  return (
    <div className={style.meshEditor}>
    {copyModal && <div className={style.cssModal}>
      <div className={style.copy}>
          <button onClick={copyToClipBoard}>
             {copied ? <BiCheck size={18} color='green'/> : <MdOutlineContentCopy size={14} color='#fff'/>}
            copy</button>
          <span onClick={()=>setCopyModal(prev=>!prev)}>
               <MdOutlineCancel size={24} color='#9e9ea8'/>
          </span>
      </div>
       <textarea name="" id="" readOnly cols="30" value={cssCode} rows="10"></textarea>
    </div>}
       <div className={style.colorControls}>
          <div className={style.bgcwrapper}>
              <span>Background Color</span>
              <div className={style.bgc}>
                  <input type="color" value={bgc} onChange={handleBgc} />
                  <span>{bgc}</span>
              </div>
          </div>

          <div className={style.colorArray}>
             <div className={style.addColor}>
                   <span>Add Color</span>
                  <div className={style.addColorContainer}>
                     <div className={style.colorText}>
                        <input type="color" value={newHex} onChange={handleNewColor} />
                        <span>{newHex}</span>
                     </div>
                     <button className={style.addColorBtn} onClick={handleAddcolor}>
                         <MdAdd color='#fff' size={16} />
                     </button>
                  </div>
            </div>

        {/* COLOR ITEM ARRAY */}

              <div className={style.colorItemArray}>
                    <h1>Gradient Colors</h1>
                    <div className={style.colorItemsContainer}>
                     {colors.map((item, index)=>(
                        <div className={style.coloritem} key={index} draggable
                          onDragStart={(e)=>(dragItem.current = index)}
                          onDragEnter={(e)=>(dragOverItem.current = index)}
                          onDragEnd={handleSort}
                          onDragOver={(e)=>e.preventDefault()}>
                           <div className={style.number}>{index + 1}</div>
                           <div className={style.colorItemContent}>
                           <div className={style.colorTextContent}>
                           <input type="color" value={item} className={style.colorinpt}
                            onChange={(e)=>handleColorChange(e, index)}/>
                           <span className={style.colortxt}>{hsl[index]}</span>
                        </div>
                        <div className={style.Icon} onClick={()=>handleDeleteColor(index)}>
                           <FiDelete color='#fff' size={15} className={style.EraseIcon} />
                        </div>
                       </div>
                   </div>
                 ))}
            </div>
              </div>
          </div>


       </div>


       {/* PREVIEW */}
       <div className={style.preview}>
           <div className={style.buttons}>
              <button className={style.btn1} onClick={genRandomColor}>
                  <GrPowerCycle size={18} color='#fff' className={style.cycle} />
                  <span> Random Gradient</span>
              </button>
              <div className={style.btn2}>
                 <span onClick={()=>setCopyModal(prev=>!prev)}>
                   <FiCode size={20} color='blue'/>
                 </span>
                 <span>
                   <FiDownload size={20} color='blue' onClick={handleCapture}/>
                 </span>
              </div>
           </div>
           <div className={style.previewBox}
            ref={refDiv}
            style={{backgroundImage:hslArr.join(","),backgroundColor:bgc}}
            />
       </div>
    </div>
  )
}

export default MeshEditor
