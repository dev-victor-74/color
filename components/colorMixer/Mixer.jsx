"use client"

import { useEffect, useState } from 'react'
import style from './mixer.module.css'

const Mixer = () => {

  const [color1, setColor1] = useState("#9df711");
  const [color2, setColor2] = useState("#df1174");
  const [mixedColor, setMixedColor] = useState("#1119e4");
  const [mixingPercentage, setMixingPercentage] = useState(30);
  const[isCopied, setIsCopied] = useState(false);

  


  const handlePercMix = (e)=>{
      let mix_ratio = parseFloat(e.target.value);
      setMixingPercentage(mix_ratio);
  }

  const randomHex=()=>{
     const random1 =`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
        setColor1(random1);
     const random2 =`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
       setColor2(random2);
       
  }

  const handleColorChange1=(e)=>{
     setColor1(e.target.value)
  }
  const handleColorChange2=(e)=>{
    setColor2(e.target.value)
 }
 const copyToClipboard=async()=>{
    try {
       await navigator.clipboard.writeText(mixedColor);
       setIsCopied(true);
       setTimeout(() => {
         setIsCopied(false)
       },2000);

    } catch (error) {
      console.log(error)
    }
  }


const mixColors = () => {
    const hexColor1 = color1.slice(1);
    const hexColor2 = color2.slice(1);

    const red = parseInt(hexColor1.substr(0, 2), 16);
    const green = parseInt(hexColor1.substr(2, 2), 16);
    const blue = parseInt(hexColor1.substr(4, 2), 16)
    const red2 = parseInt(hexColor2.substr(0, 2), 16);
    const green2 = parseInt(hexColor2.substr(2, 2), 16);
    const blue2 = parseInt(hexColor2.substr(4, 2), 16);

    const finalRed = Math.round(red + (red2 - red) * (mixingPercentage / 100));
    const finalGreen = Math.round(green + (green2 - green) * (mixingPercentage / 100));
    const finalBlue = Math.round(blue + (blue2 - blue) * (mixingPercentage / 100));

    const finalColor = '#' + finalRed.toString(16) + finalGreen.toString(16) + finalBlue.toString(16);
    setMixedColor(finalColor)
 };

  useEffect(()=>{
   mixColors()
  },[color1, color2, mixingPercentage])

  return (
    <section className={style.colorMixer}>
         <div className={style.wrapper}>
             <div className={style.hexColorInput}>
                 <button className={style.random} onClick={randomHex}>Random Colors</button>
               
                <div className={style.colorItemContainer}>
                    <h1>Color 1</h1>
                 <div className={style.colorItem}>
                     <input type="color" name="" id="" value={color1} onChange={handleColorChange1} />
                     <input type="text" name="" id="" value={color1} onChange={handleColorChange1} />
                 </div>
                 </div>
                 <div className={style.firstColorPreview} style={{backgroundColor:color1}}/>
                 <div className={style.colorItemContainer}>
                    <h1>Color 2</h1>
                 <div className={style.colorItem}>
                     <input type="color" name="" id="" value={color2} onChange={handleColorChange2} />
                     <input type="text" name="" id="" value={color2} onChange={handleColorChange2} />
                 </div>
                 </div>
                 <div className={style.firstColorPreview} style={{backgroundColor: color2}}/>
                 <div className={style.colorItemContainer}>
                    <h1>Amount</h1>
                 <div className={style.colorItem}>
                     <span>{`${Math.ceil((mixingPercentage * 10)/10)}%`}</span>
                     <input type="range" min="0.1" max="100" value={mixingPercentage} step="0.5" onChange={handlePercMix}/>
                 </div>
                 </div>
             </div>
             <div className={style.mixedColorContainer}>
                 <span className={style.mixedhex}>{mixedColor} </span>
                 <div className={style.mixedColorPreview}
                  style={{backgroundColor: mixedColor && mixedColor}}
                  onClick={copyToClipboard}
                 />
             </div>
         </div>
    </section>
  )
}

export default Mixer
