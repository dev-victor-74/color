import React from 'react'
import style from "./testimonial.module.css"
import Testimony from '../testimony/Testimony'


const testimonials = [
    {
        id: 1,
        name: "Lama Dev",
        profile: "UI/UX Designer",
        profileImg: "https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Thumbs for Uitool Guys they really did a great Job, this have helped me and my teams alot",
    },

    {
        id: 2,
        name: "Dave Willie",
        profile: "software Developer",
        profileImg: "https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Thumbs for Uitool Guys they really did a great Job, this have helped me and my teams alot",
    },
    {
        id: 3,
        name: "Eddie Mark",
        profile: "FullStack Developer",
        profileImg: "https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Thumbs for Uitool Guys they really did a great Job, this have helped me and my teams alot",
    },
    {
        id: 4,
        name: "Evelyn Donalds",
        profile: "Frontend Developer",
        profileImg: "https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Thumbs for Uitool Guys they really did a great Job, this have helped me and my teams alot",
    }
]

const Testimonial = () => {
  return (
    <section className={style.testimonial}>
         <div className={style.wrapper}>
               <h1>Color <span>Tools</span></h1>
               <div className={style.testimonialcontainer}>
                   {testimonials.map((testi, i)=>(
                      <Testimony {...testi}  key={testi.id}/>
                   ))}
               </div>
         </div>
    </section>
  )
}

export default Testimonial
