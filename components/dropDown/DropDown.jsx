"use client"
import Link from 'next/link'
import style from './drop.module.css'
import { toolsLink } from '@/lib/tools' 

const DropDown = ({setIsOpen}) => {

  
     
  return (
    <div className={style.dropdown}
    >
          <div className={style.wrapper}>
            {
                toolsLink.map((tool, i)=>(
                    <Link href={tool.url} className={style.url} key={i} 
                       onClick={()=>setIsOpen(prev=>!prev)} rel='preload'>
                        <div className={style.dropItem} 
                        >
                          <div className={style.iconWrapper}>
                             <tool.icon size={35} color={tool.color}/>
                          </div>
                          <span>{tool.title}</span>
                        </div>
                    </Link>
                ))
            }
          </div>
    </div>
  )
}

export default DropDown
