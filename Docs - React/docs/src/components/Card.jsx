import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import {IoClose} from "react-icons/io5";
import {motion} from "framer-motion";

function Card({data , reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='relative bg-zinc-400 h-[30%] w-60 rounded-[40px] bg-zinc-900/90 px-8 py-12 overflow-hidden text-white m-4'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-10 left-0 h-[20%] w-full py-18'>
            <div className='flex items-center justify-between text-zinc-100 mb-2 px-8'>
                <h5>{data.filesize}</h5>
                <span>
                    {data.close ? <IoClose/> : <LuDownload /> }
                </span>
            </div>
            {data.tagdetails.isOpen ? (
                    <div className={`tag w-full h-[3.4vw] ${data.tagdetails.tagColor === "blue"?"bg-blue-600" :"bg-green-500"} flex items-center justify-center text-md font-semibold`}>
                        <h3>{data.tagdetails.tagTitle}</h3>
                    </div>) 
            :(
                <div className='w-full h-[3.4vw] bg-neutral-500'>
                </div>
            )}
        </div>
    </motion.div>
  )
}

export default Card