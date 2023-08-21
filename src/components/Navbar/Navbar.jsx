import { motion } from "framer-motion"
import { FaCircle } from "react-icons/fa"
function List(props){
    const{style="text-black font-medium hover:text-blueC",children} = props
    return(
        <li className={style}>{children}</li>
    )
}
function Navbar(){
    return(
        <motion.div initial={{opacity:0,y:-40}} whileInView={{opacity:1, y:0}}  viewport={{once:false, amount:0.1}} transition={{duration:0.5}} className="navBar flex flex-col lg:justify-between items-center lg:flex-row md:justify-between md:flex-row px-[3rem] py-8">
            <motion.div initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:1}} className="logoDiv">
                <a href="/" className="logo text-[25px] text-center text-blueC"><strong>dzul</strong>fikarubaid</a>
            </motion.div>
            <div className="menu flex gap-12 text-center justify-center items-center">
                <List><a href="#who">WHO</a></List>
                <List><a href="#what">WHAT</a> </List>
                <List><a href="#work">WORK</a> </List>
                {/* <List><a href="#wkwk">WKWK</a> </List> */}
            </div>
            <a href="/live-project" className="p-2 px-3 bg-black text-white rounded-r-xl rounded-tl-lg hover:text-black hover:bg-blue-100 flex flex-row items-center gap-2">Live Project<span><FaCircle className="w-2" color="red"></FaCircle></span></a>

        </motion.div>
    )
}
export default Navbar