import React from 'react'
import style from "./page.module.css"
import ConverterHeading from '@/components/converterHeading/ConverterHeading'
import MoreTools from '@/components/moreTools/MoreTools'
import ContentRgb from '@/components/contentrgb/ContentRgb'

const RgbToHex = () => {
  return (
    <div className={style.rgbToHex}>
        <section className={style.wrapper}>
             <div className={style.container}>
                <ConverterHeading
                   pageTitle="RGB to HEX HSL & CMYK"
                   desc = "Easily convert any color from HEX to RGB format, and get the exact color code you need for your design."
                />
                <ContentRgb/>
             </div>
        <MoreTools/>
        </section>
    </div>
  )
}

export default RgbToHex
