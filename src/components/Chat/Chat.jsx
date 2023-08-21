import React from 'react'
import { FaArchive, FaComments, FaCross, FaTimes} from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
function Chat() {
    const [open, setOpen] = useState(false)
    function handleClick(){
        setOpen(!open)
    }
    function ChatIcon(){
        return(
            <motion.button onClick={handleClick} drag="y"  className='fixed bottom-10 right-2 z-[999999] bg-blue-300 hover:bg-blue-600 text-white p-2 px-3 rounded-l-xl'><div className='flex flex-col-reverse text-sm gap-1 '>
            <h1 className='transform -rotate-90 origin-center'>C</h1>
            <h1 className='transform -rotate-90 origin-center'>H</h1>
            <h1 className='transform -rotate-90 origin-center'>A</h1>
            <h1 className='transform -rotate-90 origin-center'>T</h1>
            <h1 className='transform -rotate-90 origin-center '>M</h1>
            <h1 className='transform -rotate-90 origin-center'>E</h1>
            
        </div></motion.button>
        )
    }
  return (
    <div className=''>
        {
            open ? 
            <AnimatePresence>
                <motion.div drag='y' initial={{ x:400 }} animate={{ x: 0 }} transition={{ duration: 0.01 }}  className='fixed bottom-10 right-4 z-[999999] w-[400px] p-4 flex flex-col gap-4 bg-white shadow-xl ease-in-out duration-700'>
                <div className='flex flex-row-reverse justify-between'>
                    {/* <div>v</div> */}
                    <button onClick={handleClick}><FaTimes></FaTimes></button>
                </div>
                <h1 className='text-center  text-blue-500'>Send me a message!</h1>
                <label htmlFor="chat"></label>
                <textarea className='h-20 focus:outline-none flex flex-wrap p-2 rounded-md bg-gray-100'/>
                <button className='bg-black text-white p-2 px-3 w-full'>Send</button>

            </motion.div>

            </AnimatePresence>
             : <ChatIcon/>
        }
    </div>
  )
}

export default Chat