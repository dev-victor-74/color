import style from "./converter.module.css"
import {MdOutlineInvertColors} from "react-icons/md"

const ConverterHeading = ({pageTitle,desc}) => {
  return (
    <div className={style.converterHeading}>
         <div className={style.wrapper}>
             <div className={style.title}>
                 <div className={style.icon}>
                     <MdOutlineInvertColors
                      size={35}
                      color="purple"
                     />
                 </div>
                 <h1>{pageTitle}</h1>
             </div>
             <div className={style.pagedesc}>
                 <p>{desc}</p>
             </div>
         </div>
    </div>
  )
}

export default ConverterHeading
