import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const coldata = [{col :"blue"},{col:"red"},{col:"green"},{col:"aqua"},{col:"black"},{col:"white"}];
    const data=[{desc:"lorem",filesize:".9mb",close:true,
      tagdetails:{
          isOpen:true,
          tagTitle:"Download Now",
          tagColor :"green"
  }},{desc:"lorem",filesize:".9mb",close:true,
      tagdetails:{
          isOpen:true,
          tagTitle:"Download Now",
          tagColor :"blue"
  }},{desc:"lorem",filesize:".9mb",close:false,
    tagdetails:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor :"green"
}}]
  return (
    <>
      <div ref={ref} className='fixed w-full h-screen z-[3] flex gap-10 flex-wrap'>
          {data.map((item,index)=>(
              <Card data={item} reference={ref} />
          ))}
        <div className='w-[80%] h-16 relative bottom-[-10%] bg-zinc-500 ml-48 rounded-lg flex items-center justify-between px-10'>
          {coldata.map((item1,index1)=>(
            <>
                <div className={`bg-${item1.col}-500 h-[80%] w-[10%] flex items-center justify-center rounded-3xl`}>{item1.col}</div>
            </>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default Foreground