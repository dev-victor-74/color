"use client"
import React from 'react'
import style from "./featured.module.css"
import { toolsLink } from '@/lib/tools'
import ToolBox from '../toolbox/ToolBox'



const Featured = () => {
  return (
    <div className={style.featured}>
        <div className={style.wrapper}>
            <h1>Color <span>Tools</span> </h1>
            <div className={style.toolContainer}>
                  {
                    toolsLink.map((tool, i)=>(
                        <ToolBox key={i}
                          Icon ={<tool.icon size={35} color={tool.variant} />}
                          {...tool}
                        />
                    ))
                  }
            </div>
        </div>
    </div>
  )
}

export default Featured
