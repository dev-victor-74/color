import MoreTools from '@/components/moreTools/MoreTools'
import style from './page.module.css'
import ConverterHeading from '@/components/converterHeading/ConverterHeading'
import ContentHex from '@/components/content/Content'

const HexToHsl = () => {
  return (
    <div className={style.hexToHsl}>
        <section className={style.wrapper}>
             <div className={style.container}>
                <ConverterHeading
                   pageTitle="HEX to HSL"
                   desc = "Easily convert any color from HEX to RGB format, and get the exact color code you need for your design."
                />
                <ContentHex/>
             </div>
        <MoreTools/>
        </section>
    </div>
  )
}

export default HexToHsl
