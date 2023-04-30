import React from "react"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Button(props){
    const{children} = props
    return(
        <button className={`h-10 px-6 font-semibold rounded-[10px] bg-blueC text-white`} type="submit">{children}</button>
    )
}
function Value(){
    return(
        <div id="who" className="flex items-center justify-center flex-col gap-8 p-[3rem] mb-12">
            <h1 className="font-semibold text-textC text-[32px]">Hi, I am Dzul</h1>
            <p>A student interested in web development and artificial intelligence</p>
            <Button>Check My Resume</Button>
            <p>or connect with me on</p>
            <div className="social flex flex-row gap-6">
                <a href="example.com"><FaInstagram size="50px"></FaInstagram></a> 
                <a href=""><FaLinkedinIn size="50px"></FaLinkedinIn></a>   
            </div>
        </div>
    )
}

Value.Button = Button
export default Value