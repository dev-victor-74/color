import Heading from '@/components/heading/Heading'
import style from './page.module.css'

const ContrastChecker = () => {
  return (
    <div className={style.contrastChecker}>
        <Heading
          title="Color Contrast Checker"
          desc=""
        />
    </div>
  )
}

export default ContrastChecker
