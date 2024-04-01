"use client"
import { useState } from 'react'
import style from './palletebox.module.css'


const PalleteBox = ({hex1,hex2,hex3,hex4,hex5}) => {

  const[isCopied, setIsCopied] = useState(false)

 const copyToClipBoard =async(hex)=>{

      try {
        await navigator.clipboard.writeText(hex)
        setIsCopied(true)

        setTimeout(()=>{
            setIsCopied(false)
        }, 2000)
        
      } catch (error) {
          console.log("failed to copy to clipboard")
      }
 }

  return (
    <div className={style.palletebox}>
        <div className={style.pallete} style={{backgroundColor:hex1}} onClick={()=>copyToClipBoard(hex1)}>
            <span className={style.hexvalue}>{hex1}</span>
        </div>
        <div className={style.pallete} style={{backgroundColor:hex2}} onClick={()=>copyToClipBoard(hex2)}>
           <span className={style.hexvalue}>{hex2}</span>
        </div>
        <div className={style.pallete} style={{backgroundColor:hex3}} onClick={()=>copyToClipBoard(hex3)}>
            <span className={style.hexvalue}>{hex3}</span>
        </div>
        <div className={style.pallete} style={{backgroundColor:hex4}} onClick={()=>copyToClipBoard(hex4)}>
            <span className={style.hexvalue}>{hex4}</span>
        </div>
        <div className={style.pallete} style={{backgroundColor:hex5}} onClick={()=>copyToClipBoard(hex5)}>
             <span className={style.hexvalue}>{hex5}</span>
        </div>
    </div>
  )
}

export default PalleteBox
