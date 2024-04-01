"use client"

import style from "./footer.module.css"
import { AiFillFacebook,AiFillInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={style.Footer}>
       <div className={style.wrapper}>
            <div className={style.left}>
                 <span>uicolor</span>
            </div>
            <div className={style.center}>
                 <Link href="/"  as="style" rel='preload'>
                    <span>Terms of use</span>
                 </Link>
                 <Link href="/"  as="style" rel='preload'> <span>Privacy Policy</span> </Link>
                 <Link href="/"  as="style" rel='preload'> <span>Contact</span> </Link>
                 <Link href="/"  as="style" rel='preload'> <span>About</span> </Link>
            </div>
            <div className={style.right}>
                <div className={style.socialicon}>
                   <span> Follow us </span>
                   <div className={style.icon}>
                    <Link href="/" className={style.iconWrapper} rel='preload'><AiFillFacebook size={30} color="blue"/> </Link>
                    <Link href="/" className={style.iconWrapper} rel='preload'><RiTwitterXFill size={20} color="#04030c"/></Link>
                    <Link href="/" className={style.iconWrapper} rel='preload'> 
                        <AiFillInstagram size={30} color="#f32249"/>
                    </Link>
                   </div>
                </div>
            </div>
       </div>
    </footer>
  )
}

export default Footer
