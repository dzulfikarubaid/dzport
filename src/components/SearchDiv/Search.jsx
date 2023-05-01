// import {Logo.Django from "./components/Logos/Logos"
import Logo from "../Logos/Logos"
import React, {useEffect, useState } from "react"
import Papa from "papaparse"
import Axios from "axios"

function Button(props){
    const{children} = props
    return(
        <button className={`h-10 font-semibold rounded-[10px] bg-blueC text-white px-2 sm:px-2 lg:px-4 md:px-4 self-end`} type="submit">{children}</button>
    )
}
function Search(){
    const [data, setData] =useState([])
    useEffect(()=>{
        Axios.get('https://dzport.vercel.app/api/').then((res) => setData(res.data))
    },[])
    return(
        <div id="work" className="flex items-center justify-center flex-col gap-8 p-[3rem]">
        <h1 className="font-semibold text-textC text-[32px]">Recent Works</h1>
        {/* <iframe className="absolute bg-white w-full h-[700px]" src="https://sezero.tech/dezolver" allowFullScreen="allowFullScreen"  ></iframe> */}
        <div className="container mx-auto px-6 sm:flex sm:flex-wrap sm:gap-10 sm:justify-center">
            {data.map((work) => (
                <div className="rounded-md border h-[600px] overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-80 p-5 flex flex-col justify-between">
                <img className="rounded-md" src={`/static/images/${work.image}`} title={work.image} alt="" />
                
                <div className=" absolute " >
                
                </div>
                <div className="py-6 h-full">
                    <h1 className="text-xl font-semibold tracking-tight pb-5">{work.title}</h1>
                    <h1 className="text-m">{work.desc}</h1>
                </div>
                <div className="flex items-center justify-between">
                    <div className="logo-skill flex flex-row flex-wrap gap-8 w-[50%] items-center">
                        <Logo title={work.skill1}></Logo>
                        <Logo title={work.skill2}></Logo>
                        <Logo title={work.skill3}></Logo>
                        <Logo title={work.skill4}></Logo>
                        <Logo title={work.skill5}></Logo>
                        <Logo title={work.skill6}></Logo>
                        <Logo title={work.skill7}></Logo>
                        <Logo title={work.skill8}></Logo>
                        <Logo title={work.skill9}></Logo>
                        <Logo title={work.skill10}></Logo>
                    </div>
                <Button>See More</Button>
                </div>
            </div>
            ))}
           
        </div>
    </div>
    )
}


// const Search = () => {
//     const [data, setData] = useState({});
//     Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRuOTeT-_66sOpT6ALXPkW7Ug2B2dhyfBUBVZLwo5P7zy6tUbaoUr2Tweeeku9yL_b5P9LaS7uo0aSl/pub?output=csv", {
//     download: true,
//     header: true,
//     complete: (results) => {
//       setData(results.data);
//     }
//   })
//   const works = Array.from(data);
//   return(
    
//     )
//   }

export default Search