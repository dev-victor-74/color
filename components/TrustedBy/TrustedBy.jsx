import React from 'react'
import style from "./TrustedBy.module.css"
import Image from 'next/image'

 
const trusted =[
    {
        id:"1",
        imgurl:"/images/dropbox.png",
        name: "Dropbox"
    },
    {
        id:2,
        imgurl:"/images/google.png",
        name:"Google"
    },
    {
        id:3,
        imgurl:"/images/netflix.png",
        name:"Netflix"
    },
    {
        id:4,
        imgurl:"/images/microsoft.png",
        name:"Microsoft"
    },
    {
        id:5,
        imgurl:"/images/notion.png",
        name:"Notion"
    }
]
const TrustedBy = () => {
  return (
    <section className={style.trustedby}>
        <div className={style.wrapper}>
              <h1>Color <span>Tools</span></h1>
            <div className={style.trustContainer}>
              {
                trusted.map((trust, i)=>(
                    <div className={style.trustbox} key={trust.id}>
                         <div className={style.trustlogo}>
                             <Image
                               src={trust.imgurl}
                               width={60}
                               height={60}
                               alt={trust.name}
                               className={style.logo}
                               />
                         </div>
                         <div className={style.trustname}>
                             <h1>{trust.name}</h1>
                         </div>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default TrustedBy
