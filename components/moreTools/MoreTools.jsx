import Link from 'next/link'
import style from './more.module.css'
import {MdOutlineInvertColors} from "react-icons/md"

const moreTools = [
    {
        id: 1,
        name: "HEX TO RGB",
    },

    {
        id: 2,
        name: "HEX TO HSL",
    },
    
    {
        id: 3,
        name: "HEX TO CMYK",
    },
    
    {
        id: 4,
        name: "HEX TO HWB",
    },
    
    {
        id: 5,
        name: "RGB TO HEX",
    },
    
    {
        id: 6,
        name: "RGB TO HSL",
    },
    
    {
        id: 7,
        name: "RGB TO CMYK",
    }
    ,
    {
        id: 8,
        name: "RGB TO HWB",
    },
]

const MoreTools = () => {
  return (
    <section className={style.moreTools}>
         <h1>Other Color Converter Tools</h1>

         <div className={style.container}>
         {
             moreTools.map((tool)=>(
                 <Link href="/" className={style.toolsContainer} key={tool.id}>
                     <div className={style.icon}>
                         <MdOutlineInvertColors size={25} color='purple'/>
                     </div>
                     <span className={style.name}>{tool.name}</span>
                </Link>
            ))
        }
        </div>
    </section>
  )
}

export default MoreTools
