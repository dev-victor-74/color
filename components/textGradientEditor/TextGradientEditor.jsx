"use client"

import { useEffect, useRef, useState } from 'react'
import {FiDelete} from "react-icons/fi"
import {BsCode} from "react-icons/bs"
import{MdFavorite} from "react-icons/md"
import style from './text.module.css'

const TextGradientEditor = () => {
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);
      
  const [colors, setColors] = useState(["#f5fcb9","#03f6dc"]);
  //,"#073f3d","#073f3d","#073f3d"
  const [color, setColor] = useState("#150f4b");
  const[hex, setHex]= useState("#f4343");
  const[textGradient, setTextGradient]= useState("");
  const[angle, setAngle]= useState(45);
  const[randomNum, setRandomNum] = useState([74, 28, 30, 20, 89]);
  const[isRandom, setIsRandom] = useState(true);
  const[isRadial, setIsRadial] = useState(false);
  const[gradient, setGradient]= useState([]);
  const[tGradient, setTgradient] = useState("")

  const _MAX = 100;
  const _MIN = 1;

  const genRandomHex=()=>{
    const hex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;
    setHex(hex)
  }

  const GenRandomNum =()=>{
   const nums = Math.floor(Math.random() * (_MAX - _MIN + 1)) + _MIN;
   return nums;
 }

  const handleColorChange=(e, index)=>{
     const temp = [...colors]
     temp[index] = e.target.value
      setColors(temp)
   }
   const genRandomColor =()=>{
    const randomHex = colors.map(c=>(
        `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`
      ))
      setColors(randomHex);
      const r1  =  colors.map(c =>(GenRandomNum()));
      setRandomNum(r1)
    }
   
    const handleSort =()=>{
   
      let _items = [...colors];
      const dragItemContent = _items.splice(dragItem.current, 1)[0];
      _items.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setColors(_items);
   }
   const handleDeleteColor =(id)=>{
    GenRandomNum()
    const _colors = [...colors];
  
    _colors.splice(id,1);
    setColors(_colors);
  
    let _nums1 = [...randomNum]
    _nums1.splice(id, 1)
    setRandomNum(_nums1)
  }

  const handleAddcolor =()=>{
    // setIsRandom(false);
    const _colors = [...colors];
    _colors.push(color);
    setColors(_colors);
    let _nums1 = [...randomNum]
    const r1  =  GenRandomNum();
    _nums1.push(r1)
    setRandomNum(_nums1)
  }

  console.log(randomNum)

  const GenRandom=()=>{
    const r  =  colors.map(c =>GenRandomNum());
    setRandomNum(r);
  }

useEffect(()=>{
    GenRandom()
    return()=>{
      GenRandom()
    }
  },[])

  const GenGradient=()=>{
    const tx = colors.map((c, i)=>(
       `${c} ${randomNum[i]}% `
    ))
    const txt = `${isRadial? "linear" : "radial"}-gradient(${angle}deg, ${tx.join(",")} )`
    setTextGradient(txt)
    console.log(textGradient)
  }
 
useEffect(()=>{
   GenGradient()
   return()=>{
    GenGradient()
   }
},[colors, isRadial, angle]);

useEffect(()=>{
  GenGradient()
  return()=>{
    GenGradient()
  }
},[])



  return (
    <section className={style.textGradientEditor}>
        <div className={style.heading}>
            <button onClick={genRandomColor}>Random</button>
            <div className={style.copy}>
               <span><BsCode size={24} color='blue'/></span>
                <span> <MdFavorite size={24} color='darkblue'/></span>
            </div>
        </div>
       <div className={style.wrapper}>
           <div className={style.colorControls}>
                <div className={style.addColor}>
                     <div className={style.addColorItem}>
                         <input type="color" value={color} onChange={e=>setColor(e.target.value)} className={style.colorinp} />
                         <input type="text" value={color} onChange={e=>setColor(e.target.value)} className={style.colorinpt} />
                     </div>
                      <button className={style.addColorBtn} onClick={handleAddcolor}>Add Color</button>
                </div>
                <div className={style.ColorAddedItems}>
                   <h1>Colors</h1>
                   { colors.map((c, i)=>(
                   <div className={style.colorItem} key={i}
                         draggable
                         onDragStart={(e)=>(dragItem.current = i)}
                          onDragEnter={(e)=>(dragOverItem.current = i)}
                          onDragEnd={handleSort}
                          onDragOver={(e)=>e.preventDefault()}
                       >
                        <div className={style.colorCont} >
                             <input type="color" value={c} className={style.colorinp} onChange={(e)=>handleColorChange(e, i)} />
                             <span>{c}</span>
                        </div>
                         <div className={style.icon} onClick={(e)=> handleDeleteColor(e,i)}>
                             <FiDelete size={15} color='#fff'/>
                         </div>
                     </div>))
                   }
                </div>
           </div>
           <div className={style.gradientType}>
             <div className={style.titleContainer}>
              <h1>Grandient Type</h1>
              </div>
               
               <div className={style.gradientTypeWrapper}>
                   <div className={style.toggle}
                   >
                       <div className={style.before}
                         style={
                          isRadial?
                         { right: "5px", transition:"all 1s ease" }:
                          {left: "5px" , transition:"all 1s ease" }
                        }
                       >
                        {isRadial? "Radial" : "Linear"}
                       </div>
                       <span onClick={()=>setIsRadial(prev=>!prev)}>Linear</span>
                       <span onClick={()=>setIsRadial(prev=>!prev)}>Radial</span>
                   </div>
                   <div className={style.GradientDirection}>
                       <h1>Direction</h1>
                       <div className={style.directionAngle}>
                           <input
                            type="text"
                            value={angle}
                            onChange={e=>setAngle(e.target.value)}
                            />
                       </div>
                   </div>
               </div>
               <div className={style.colorPosition}>
                   {
                    colors.map((c, i)=>(
                      <div className={style.ColorPositonItem} key={i}>
                         <span className={style.num}>{1 + i}</span>
                         <input type="range" className={style.range} />
                         <span className={style.per}>100%</span>
                      </div>
                    ))
                   }
               </div>
           </div>
           <div className={style.preview}>
              <h1
    style={{background:textGradient}}
              >Awesome CSS Color Tool</h1>
           </div>
       </div>
    </section>
  )
}

export default TextGradientEditor
