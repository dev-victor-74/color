 "use client"
import React, { useEffect } from 'react'
import style from "./header.module.css"
import Image from "next/image" 
import Pal from '../pal/Pal'
import Link from 'next/link'

const Header = () => {
   const images = ["/images/desin.jpg","/images/wavy.jpeg", "/images/flower-field.jpg"]

   
  return (
    <section className={style.header}>
        <div className={style.wrapper}>
          <div className={style.left}>
             <div className={style.text}>
               <h1>Awesome CSS Color Tool</h1>
               <h2>Instantly Generate Stunning Gradients & Palletes</h2>
               <p>Inspire Your Creative Journey, Craft Colors with Ease</p>
             </div>
             <div className={style.buttons}>
                 <Link href="/tools/gradient" className={style.btn2}>Browse Gradients</Link>
            </div>
          </div>
          <div className={style.right}>
                <Pal/>
          </div>
        </div>
    </section>
  )
}

export default Header
