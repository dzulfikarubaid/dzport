import React from "react"
import { FaInstagram, FaLinkedinIn, FaGithub, FaLinkedin, FaGithubAlt} from "react-icons/fa";
import { motion } from "framer-motion"
import Slideshow from "./Slideshow";
import { useState } from "react";

function Value(){
    const [resume, setResume] = useState(false)
    const [social, setSocial] = useState(false)
    function handleSocial(){
        setSocial(true)

    }
    function handleExit(){
        setSocial(false)
        
    }
    function handleClose(){
        setResume(false)
    }
    function Button(props){
        const{children} = props
        return(
            <motion.button  className={`h-10 rounded-br-xl px-6 font-semibold border-blueC text-blueC border-[1px] hover:text-black hover:border-black`} onMouseOverCapture={handleSocial} onMouseOutCapture={handleExit}>{children}</motion.button>
        )
    }
    const resumeEl = document.getElementById("resume")
    function handleResume(){
        setResume(true)
        document.getElementById("resume").scrollIntoView()
    
    }
    function AnyButton(props){
        const{children} = props
        return(
            <motion.button  className={`h-10 px-6 rounded-tl-xl font-semibold bg-blue-500 text-white border-[1px] hover:bg-black`} onClick={handleResume}>{children}</motion.button>
        )
    }
    
    return(
        <div  id="who" className="flex items-center justify-center flex-col gap-8 mb-20">
            <div className="flex flex-row gap-14">
                <div className="flex flex-col gap-5 py-8 w-[600px]">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="font-semibold text-[32px]">Hello, world!</motion.h1>
                {/* <h1>I am <strong>dzul</strong>fikarubaid</h1> */}
                <p className="">I'm dzulfikarubaid, an engineering physics student who is passionate about software development, data science and artificial intelligence. </p>
                <p id="resume" className="text-white h-0 "></p>
                {
                    resume ?
                    <div>
                        <button className="h-10 rounded-tl-xl w-full bg-red-500 text-white" onClick={handleClose}>Close Resume</button>
                        <object  width="100%" className="h-screen" data="cv.pdf" type="application/pdf">  </object>

                    </div>
                    
                    :
                    <AnyButton>Check My Resume</AnyButton>
                }
                {
                    social ?
                    <div className="social flex flex-row-reverse gap-8 mx-auto">
                    <a href="https://instagram.com/dzulfikarubaid" target="_blank"><FaInstagram size="40px" className="text-black hover:text-blue-500"></FaInstagram></a> 
                    <a href="https://linkedin.com/in/ahmad-dzulfikar-ubaidillah" target="_blank"><FaLinkedin size="40px" className="text-black hover:text-blue-500"></FaLinkedin></a>
                    <a href="https://github.com/dzulfikarubaid/" target="_blank"><FaGithub size="40px" className="text-black hover:text-blue-500"></FaGithub></a> 
                    </div>
                    :
                    null

                }
                <Button>Connect With Me</Button>
                
                
                </div>
                <div className="w-[400px]">
                {/* <img src="/images/10.avif" alt="" className="w-[400px]" /> */}
                <Slideshow></Slideshow>
                </div>
            </div>
            
        </div>
    )
}

export default Value