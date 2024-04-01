import React from 'react'
import style from "./tool.module.css"
import Link from 'next/link'

const ToolBox = ({Icon, url, title, color}) => {

  return (
    <div className={style.toolbox}>
        <div className={style.icon} style={{backgroundColor: color}}>
             {Icon}
        </div>
        <div className={style.link}>
            <Link href={url} className={style.toolLink}>
              <h3>{title}</h3>
            </Link>
        </div>
    </div>
  )
}

export default ToolBox
