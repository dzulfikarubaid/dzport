import React, { useRef, useState} from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'

const Wkwk = () => {
  const [img, setImg] = useState()
  const [aimg, setAimg] = useState()
  const [summary, setSummary] = useState()
  const [answer, setAnswer] = useState()
  const webRef = useRef(null)
  const showImg = () => {
    const image = webRef.current.getScreenshot()
    setImg(image)
    axios.post('http://127.0.0.1:8000/api/AIcam/',{
      img:image,
    })
    .then((res)=>{
      console.log(res)
      setAimg(res.data.img)
      setSummary(res.data.summarize)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const data = {chat:"",name:""}
  const [inputData, setInputData] = useState(data)
  const [error, setError] = useState('')
  const handleData = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value})
  }

  const handleAnswer = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/AIchat/',inputData)
    .then((res)=>{
      setAnswer(res.data.answer)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div id='wkwk' className='flex justify-center items-center flex-col gap-5'>
        <h1 className='font-semibold text-[32px]'>WKWK Projects</h1>
        <h2>Object Detection</h2>
      <p>Webcam</p>
      <Webcam ref={webRef}/>
      <button onClick={showImg} className='border-none bg-black px-3 py-1 rounded-full text-white'>Generate</button>
      {img && <div>
        <p>Original Image</p> 
        <img src={img} /></div>}
      
      {aimg && <div>
        <p>AI Generated Image</p>
        <img src={aimg}></img></div>}

      {summary && <div>
        <p>Summary</p>
        <p>{summary}</p></div>}
        <div className='flex flex-col gap-5 w-[600px] mb-20'>
        <form className='mt-20 flex flex-col gap-5'>
            <label htmlFor="name">Name</label>
            <input className='bg-slate-100 text-black' name="name" type="text" onChange={handleData} value={inputData.name}/>
            <label htmlFor="chat">Chat</label>
            <input className='bg-slate-100 text-black' name="chat" type="text" onChange={handleData} value={inputData.chat}/>
            
            <button className='border-none bg-black px-3 py-1 rounded-full text-white' type="submit" onClick={handleAnswer}>Send</button>
        </form>
        <p >{answer}</p>

        </div>
        
    </div>
  )
}

export default Wkwk