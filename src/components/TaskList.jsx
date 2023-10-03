import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { BiTrashAlt } from 'react-icons/bi'

const TaskList = ({list, remove, change}) => {
  return (
    <div>
        {list.map((item, index) => (
            <div className='font-semibold flex justify-between items-center px-5 bg-zinc-800 rounded-xl mb-5 h-11 w-full sm:w-[576px] mx-auto hover:bg-zinc-700 ease-in duration-300' key={item.id}>
                <button onClick={() => change(item.id)} className='flex w-full h-full items-center'>
                    <div className={`h-[20px] w-[20px] border-2 rounded-lg mr-3 border-indigo-400 ${item.isComplete ? 'bg-indigo-400' : 'bg-zinc-900'} `}>
                        {item.isComplete ? <BsCheck /> : ''} 
                    </div>
                <h2 className={`text-white text-xs ${item.isComplete ? 'line-through' : ''}`}>{index+1}. {item.title}</h2>
              </button>
              <button className='h-full px-3 hover:text-indigo-400' onClick={() => remove(item.id)}><BiTrashAlt /></button>
            </div>))}
    </div>
  )
}

export default TaskList