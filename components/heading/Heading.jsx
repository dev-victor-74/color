import style from './heading.module.css'
import{GrPowerCycle} from "react-icons/gr"

const Heading = ({title, desc,generateHex, Icon}) => {
  return (
    <section className={style.heading}>
         <div className={style.container}>
             <div className={style.left}>
              <div className={style.titlebox}>
                <div className={style.iconWrapper}>
                    {Icon}
                </div>
                <div className={style.wdesc}>
                 <h1>{title}</h1>
                 <span>{desc}</span>
                </div>
              </div>
             </div>
             <div className={style.right}>
                 {generateHex && <button className={style.randomPallete} onClick={generateHex}>
                    <GrPowerCycle size={20} color='white'/>
                    <span>Randomize</span>
                 </button>}
             </div>
         </div>
    </section>
  )
}

export default Heading
