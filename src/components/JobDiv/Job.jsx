import Logo from "../Logos/Logos"
import {motion} from "framer-motion"
function Job({isVisible}){
    return(
        <div id="what" className="flex items-center flex-col justify-center gap-10 p-[3rem]">
            <h1 className="font-semibold text-[32px] text-center">What I Do</h1>
            <div className="flex flex-row gap-10 ">
            <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1, x:0}} delay={0.5} viewport={{once:true}} transition={{duration:1}} className="w-[400px]">
                <img src="/static/images/7.avif" alt="" />
            </motion.div>
            <motion.div initial={{opacity:0,x:200}} whileInView={{opacity:1, x:0}} delay={0.5} viewport={{once:true}} transition={{duration:1}} className="flex items-center flex-col gap-10 p-[3rem] w-[600px]">
            <h1 className="font-semibold text-[24px] text-center" >Data Science & Artificial Intelligence</h1>
            <div className="flex flex-wrap justify-center gap-10">
            <Logo title="Python"></Logo>
            <Logo title="Pytorch"></Logo>
            <Logo title="Ultralytics"></Logo>
            <Logo title="MySQL"></Logo>
            </div>
            <div className="flex flex-col gap-5 text-left w-full">
                <p>Object Detection</p>
                <p>Speech Recognition</p>
                <p>Image Processing</p>
                <p>Natural Language Processing</p>
                <p>Optical Character Recognition</p>
                <p>Data Collection</p>
                <p>Regression Analysis</p>
                <p>Machine Learning</p>

            </div>
            </motion.div>
            </div>

            <div className="flex flex-row gap-10 ">
            <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1, x:0}} delay={0.5} viewport={{once:true}} transition={{duration:1}} className="w-[400px]">
                <img src="/static/images/4.jpg" alt="" />
            </motion.div>
            <motion.div initial={{opacity:0,x:200}} whileInView={{opacity:1, x:0}} delay={0.5} viewport={{once:true}} transition={{duration:1}} className="flex items-center flex-col  gap-10 p-[3rem] w-[600px]">
            <h1 className="font-semibold text-[24px] text-center">Full Stack Development</h1>
            <div className="flex flex-wrap gap-10 justify-center">
            <Logo title="HTML"></Logo>
            <Logo title="CSS"></Logo>
            <Logo title="Javascript"></Logo>
            <Logo title="React"></Logo>
            <a href="https://reactnative.dev/"><img src="https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png" title="React Native" width={'30'} /></a>
            <Logo title="Django"></Logo>
            <Logo title="Flask"></Logo>
            <Logo title="PostgreSQL"></Logo>
            <Logo title="MySQL"></Logo>
            </div>
            <div className="flex flex-col gap-5 text-left w-full">
                <p>Frontend Development using React</p>
                <p>Mobile App Development using React Native</p>
                <p>Rest API Development using Django Rest Framework</p>
                <p>Backend Development using Django and Flask</p>
            </div>
            </motion.div>
            </div>
            
            
        </div>
    )
}
export default Job