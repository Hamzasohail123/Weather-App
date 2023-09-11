import React, { useRef } from 'react'

export const Search = (props) => {

    const searchInput = useRef();

  return (
    <div className='flex shadow-xl'>
        <input type='search' value={props.searchData} onChange={()=>props.eventHandler(searchInput.current.value)} 
    ref={searchInput} className='border border-black w-full p-2 text-2xl' />
        <button onClick={props.weatherHandler} className='p-3 bg-slate-500 text-white'>serach</button>
    </div>
  )
}
