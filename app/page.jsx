import styles from './page.module.css'
import Header from '@/components/header/Header'
import Featured from '@/components/featured/Featured'
import Testimonial from '@/components/testimonials/Testimonial'
import TrustedBy from '@/components/TrustedBy/TrustedBy'

export default function Home() {
  return (
    <div className={styles.home}>
        <Header/> 
        <Featured/>
        {/* <Testimonial/> */}
        {/* <TrustedBy/> */}
    </div>
  )
}
