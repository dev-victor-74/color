"use client"
import style from "./page.module.css"
import Heading from '@/components/heading/Heading'
import ImageColorPicker from "@/components/imagepicker/ImagePicker"
import {MdPhotoSizeSelectActual} from "react-icons/md"

const ImagePicker = () => {
  return (
    <div className={style.imagePicker}>
         <Heading
          title="Image Color Picker"
           Icon={<MdPhotoSizeSelectActual size={40} color='purple'/>}
           desc="
                 Our color picker tool allows you to easily select colors from your screen or from your photos"
         />
         <ImageColorPicker/>
    </div>
  )
}

export default ImagePicker
