import React from "react"
import { useStore } from "../../store/todos"


export const Filter=()=>{
    const {filters, filter, setFilter}=useStore();

    return(
        <>
        <div className='flex gap-6 cursor-pointer'>
                {filters.map(el=>(
                    <span key={el} onClick={()=> setFilter(el)} className={filter == el && 'text-blue-400 '}>{el}</span>
                ))}
              </div>
        </>
    )
}