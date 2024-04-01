import Heading from '@/components/heading/Heading'
import style from './page.module.css'
import {MdTextsms} from "react-icons/md"
import TextGradientEditor from '@/components/textGradientEditor/TextGradientEditor'

const TextGradient = () => {
  return (
    <div className={style.textGradient}>
       <Heading
        title="Text Gradient Generator"
        desc ="Easily generate text gradient of your choice color"
        Icon={<MdTextsms size={40} color='#1504fb'/>}
       />
       <TextGradientEditor/>
    </div>
  )
}

export default TextGradient
