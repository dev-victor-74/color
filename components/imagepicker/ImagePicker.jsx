"use client"

import style from "./image.module.css"
import toast from "react-hot-toast"
import Image from "next/image"
import { useCallback, useEffect,  useState } from "react"


import {MdPhotoSizeSelectActual} from "react-icons/md"
import Loading from "../loading/Loading"
import{CgColorPicker} from "react-icons/cg"
import{AiOutlineClear} from "react-icons/ai"


const ImageColorPicker = () => {
   
  const[isMounted, setIsMounted] = useState(false)
  const[img, setImg] = useState("")
  const[previewSrc, setPreviewSrc] = useState("")
  const[palette, setPalette] = useState(["#55668a","#9d8c9b","#ffc383","#0d110b","#b8bdbb"]);
  const[isCopied, setIsCopied] = useState(false)
  const[openModal, setOpenModal] = useState(false)

   const handleFileChange=(e)=>{
     setPalette([])
       const fil = e.target.files[0]
      previewFile(fil)
      setOpenModal(false)
   }
 
  
    const handleUrl = useCallback((e)=>{
      setImg(e.target.value)
      setPreviewSrc(e.target.value);
      setPalette([]);
    
   },[img])
 

   const previewFile=(file)=>{
       if(!file){
       return null
      }
         const reader = new FileReader()
         reader.readAsDataURL(file)
         reader.onloadend=()=>{
          setPreviewSrc(reader.result)
         }

   }
   
   const copyToClipboard=async(i)=>{
     try {
        await navigator.clipboard.writeText(palette[i]);
        setIsCopied(true);
         toast.success("copied")
        setTimeout(() => {
          setIsCopied(false)
        },2000);

     } catch (error) {
       console.log(error)
     }
   }

   const pickColor= async()=>{
     const eyeDropper = new EyeDropper()
     const{sRGBHex} = await eyeDropper.open()
     setPalette(prev=>[...prev, sRGBHex])
   }

   const clearPalette =()=>{
     setPalette([])
   }

 useEffect(()=>{
    setIsMounted(true)
  }, [])

  const handleModalClose=(e)=>{
    let type = e.target.id;
    if(type === "fixed") return setOpenModal(false);

    if(type === "mcontainer") return null;
  }
  
  if(!isMounted){
    return (
      <div className={style.loader}>
         <Loading/>
      </div>
    )
  }
  
  return (
    <>
    {openModal && <section className={style.modal} id="fixed" onClick={(e)=>handleModalClose(e)}>
        <div className={style.modalContainer} id="mcontainer">
      <div 
      className={style.closeModal}
      onClick={()=>setOpenModal(false)}
      >x</div>
            <div className={style.inputcontainer}>
               <input 
               type="text" 
               placeholder="Paste your image address here....."
               className={style.linkInput} 
               onChange={handleUrl}
               />
               
            </div>
            <div className={style.optional}>
                <span>OR</span>
            </div>
            <div className={style.uploadIcon}>
                        <label htmlFor="img" >
                            <MdPhotoSizeSelectActual size={25} color="#fff"/>
                           <span>Upload Your Photo</span>
                        </label>
                        <input type="file" id="img"
                         className={style.inputfile} 
                         accept="image/*"
                         onChange={handleFileChange}
                         />
             </div>
        </div>
    </section>}
    <section className={style.imagepicker}>
        <div className={style.wrapper} >
            <div className={style.palletespreview} >
                <div className={style.genPalletes}>
                   { palette.map((p, i)=>(<div className={style.pallete} 
                    style={{backgroundColor:p}} key={i} onClick={()=>copyToClipboard(i)} />)) }
                </div>
            </div>
            <div className={style.imagepreview}>
              <div className={style.imageWrapper}>
                 <Image
                   src= {previewSrc ? previewSrc : "/images/random.jpeg"}
                   height={300}
                   width={400}
                   alt="photo"   
                   className={style.previewimg}
                   priority
                   />
                </div>
                <div className={style.uploadContainer}>
                    <button
                    onClick={()=>setOpenModal(true)}
                    className={style.uploadBtn}>
                     Upload From Your Device</button>
                    <button className={style.pickpelette} onClick={clearPalette}>
                      <AiOutlineClear size={16} color="red"/>
                      Clear</button>
                    <button className={style.pickpelette} onClick={pickColor}>
                      <CgColorPicker size={17} color="purple"/>
                      Pick</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ImageColorPicker
