import Heading from '@/components/heading/Heading'
import {HiColorSwatch} from "react-icons/hi"
import style from './page.module.css'
import GradientEditor from '@/components/gradientEditor/GradientEditor'

const CreateGradient = () => {
  return (
    <div className={style.createGradient}>
      <Heading
       title="Create Color Gradient"
       desc="Use our Gradient Generator tool to create stunning background gradient"     
       Icon={<HiColorSwatch size={40} color='#fa2c28'/>}  
      /> 
      <GradientEditor/>
    </div>
  )
}

export default CreateGradient
