import { useState } from 'react'
import style from './gradientbox.module.css'
import toast from 'react-hot-toast'

const GradientBox = ({hex1,hex2, index}) => {
    
const linearGradient = `linear-gradient(to right, ${hex1[index]}, ${hex2[index]})`

const[isCopied, setIsCopied] = useState(false)

 const copyToClipBoard =async()=>{

      try {
        await navigator.clipboard.writeText(linearGradient)
        setIsCopied(true);
        toast.success("copied")

        setTimeout(()=>{
            setIsCopied(false)
        }, 2000)
        
      } catch (error) {
          console.log("failed to copy to clipboard")
      }
 }

  return (
    <div className={isCopied? style.gradientboxCopied : 
        style.gradientbox} onClick={copyToClipBoard}>
        <div className={style.previewbox}
          style={{background:linearGradient}}
        />
    </div>
  )
}

export default GradientBox
