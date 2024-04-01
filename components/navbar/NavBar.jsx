"use client"
import React, { useState } from 'react'
import style from "./Nav.module.css"
import {BiChevronDown} from "react-icons/bi"
import {GiElectric} from "react-icons/gi"
import DropDown from '../dropDown/DropDown'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci";


const NavBar = () => {
  
   const[isOpen, setIsOpen] = useState(false)
   const handleDropDown =()=>{
    setIsOpen(prev => !prev)
   }

  return (
    <nav className={style.navbar}>
         <div className={style.wrapper}>
             <div className={style.left}>
              <Link href="/">
                 <span className={style.logotext}>uicolor</span>
              </Link>
              <div className={style.linkItems}>
              <Link href="/">
                 <span>Palettes</span>
              </Link>
               <Link href="/">
                 <span>Random Palettes</span>
              </Link>
              <Link href="/">
                 <span>Gradients</span>
              </Link>
             </div>
             </div> 

             <div className={style.right}>

                 <div className={style.category} onClick={handleDropDown}>
                   <span>Tools</span>
                   <BiChevronDown size={18} color='#030303'/>
                 </div>
                 <span className={style.pro}>Upgrade
                   <GiElectric size={16} color='lime'/>
                 </span>
                 <button className={style.login}>Sign up</button>
             </div>
         </div>
             {
              isOpen && <DropDown isOpen ={isOpen} setIsOpen={setIsOpen} />
             }
             <div className={style.dropmenu}>
               <CiMenuFries onClick={handleDropDown} size={20} color='black' className='fries'/>
             </div>
    </nav>
  )
}

export default NavBar
