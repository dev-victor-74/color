import React from 'react'
import style from "./pal.module.css"

const Pal = () => {
  return (
    <div className={style.container}>
       <div className={style.wrapper1}>
           <div style={{backgroundColor: "#096cde"}} />
           <div style={{backgroundColor: "#fb4068"}}/>
           <div style={{backgroundColor: "#d5eb13"}}/>
           <div style={{backgroundColor: "#14d61e"}}/>
           <div style={{backgroundColor: "#7de0fe"}}/>
           <div style={{backgroundColor: "#7518b9"}}/>
       </div>
       <div className={style.wrapper2}>
           <div style={{backgroundImage:"linear-gradient(to right, #df0d14, #3f51f4)"}}/>
           <div style={{backgroundImage:"linear-gradient(to bottom, #09e936, #900356)"}}/>
           <div style={{backgroundImage:"linear-gradient(to top, #172138, #a7bea9)"}}/>
           <div style={{backgroundImage:"linear-gradient(to left, #ab49c8, #afceec)"}}/>
           <div style={{backgroundImage:"linear-gradient(to left, #ab49c8, #afceec)"}}/>
       </div>
    </div>
  )
}

export default Pal
