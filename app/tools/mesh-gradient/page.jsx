import Heading from '@/components/heading/Heading'
import {IoColorPalette} from "react-icons/io5"
import style from './page.module.css'
import MeshEditor from '@/components/meshEditor/MeshEditor'

const MeshGradient = () => {
  return (
    <div className={style.meshGradient}>
        <Heading 
         title="Mesh Gradient Generator"
         desc="Generate awesome mesh gradient easily"
         Icon={<IoColorPalette size={40} color='#300b55'/>}
        />
      <section className={style.meshEditorContainer}>
         <MeshEditor/>
      </section>
    </div>
  )
}

export default MeshGradient
