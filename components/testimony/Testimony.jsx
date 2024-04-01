import React from 'react'
import style from "./testimony.module.css"
import Image from 'next/image'

const Testimony = ({profile, desc, profileImg, name}) => {
  return (
    <div className={style.testimonybox}>
         <div className={style.profile}>
            <Image 
                  src={profileImg}
                  height={40}
                  width={40}
                  alt={name}
                  className={style.pimg}
            />
            <div className={style.profiledesc}>
                 <h1>{name}</h1>
                 <span>{profile}</span>
            </div>
         </div>
         <div className={style.desc}>
            <p>{desc}</p>
         </div>
    </div>
  )
}

export default Testimony
