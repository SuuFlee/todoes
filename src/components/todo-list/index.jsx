import React from "react"
import { useStore } from "../../store/todos";


export const Todos=()=>{
  const { filteredTodos, todos } = useStore();
    
    return (
    <>
    {filteredTodos().map((todo, i)=>(
        <React.Fragment key={todo.title}>
        <div className={`h-13 w-full bg-[#353858] m-auto flex items-center text-left ${i==0? "rounded-t-lg": ""}`}>
          <input className="w-5 h-5 rounded-full m-[15px] border border-gray-400 bg-transparent appearance-none checked:bg-white checked:border-white" type="checkbox" checked={todo.completed}/>
          <p className="ml-4 text-gray-300 items-center">{todo.title}</p>
        </div>
        <hr className="border-gray-500"/>
        </React.Fragment>
      ))}
    </>
)
}