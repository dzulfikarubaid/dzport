import React from "react"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion"
function Button(props){
    const{children} = props
    return(
        <motion.button  className={`h-10 px-6 font-semibold bg-blueC text-white`} type="submit">{children}</motion.button>
    )
}
function Value(){
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}  id="who" className="flex items-center justify-center flex-col gap-8 mb-20">
            <div className="flex flex-row gap-14">
                <div className="flex flex-col gap-5 py-8">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="font-semibold text-[32px]">Hi, I am Dzul</motion.h1>
                <p className="">A student interested in web development and artificial intelligence</p>
                <Button>Check My Resume</Button>
                <p className="text-center">or connect with me on</p>
                <div className="social flex flex-row gap-5 mx-auto">
                    <a href="example.com"><FaInstagram size="40px"></FaInstagram></a> 
                    <a href=""><FaLinkedinIn size="40px"></FaLinkedinIn></a>   
                </div>
                </div>
                <div>
                <img src="/static/images/10.avif" alt="" className="w-[400px]" />
                </div>
            </div>
        </motion.div>
    )
}

Value.Button = Button
export default Value