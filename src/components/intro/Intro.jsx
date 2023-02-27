import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

  /*let isLoading = true;
  const textRef = useRef(null);

  useEffect(()=>{
    if (textRef.current && isLoading) {
   init(textRef.current, { 

    strings: ['Developer', 'FullStack' ,'MonaChina'] })
   //console.log(textRef)
   }
  },[])*/

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/fran-removebg.png" alt="" />
          </div>
        </div>

        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Fran Sanchez</h1>
            <h3>
              Freelance <span >FULLSTACK</span>
            </h3>
          </div>
            <a href="#portfolio">
            <img src="assets/down.png" alt="" />
            </a>
        </div>
    </div>
  )
}
