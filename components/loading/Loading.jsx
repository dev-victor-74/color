import style from "./loading.module.css"

const Loading = () => {
  return (
    <div className={style.spinner}>
        <span></span>
       <span></span>
       <span></span>
       <span></span>
    </div>
  )
}

export default Loading
