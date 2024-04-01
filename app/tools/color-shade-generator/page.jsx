import Heading from '@/components/heading/Heading'
import {AiOutlineBgColors,AiOutlineRadiusSetting} from "react-icons/ai"
import style from './page.module.css'
import PaletteEditor from '@/components/palettegenerator/PaletteEditor'

const PaletteGenerator = () => {
  return (
    <div className={style.paletteGenerator}>
         <Heading
          title="Color Shade Generator"
          desc="Easily Generate color shades of your desired colors"
          Icon={<AiOutlineBgColors size={40} color='blue'/>}
         />
         <PaletteEditor/>
    </div>
  )
}

export default PaletteGenerator
