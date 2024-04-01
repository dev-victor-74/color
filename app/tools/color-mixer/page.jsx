import Heading from '@/components/heading/Heading'
import style from './page.module.css'
import {RxMixerHorizontal} from "react-icons/rx"
import Mixer from '@/components/colorMixer/Mixer'


const ColorMixer = () => {
  return (
    <div className={style.colorMixer}>
        <Heading
         title="Color Mixer"
         desc="Generate the desired color for your design with our Color Mixer tool. Mix two colors, and preview the color combination with ease."
         Icon={<RxMixerHorizontal size={40} color='purple'/>}
        />
        <Mixer/>
    </div>
  )
}

export default ColorMixer
