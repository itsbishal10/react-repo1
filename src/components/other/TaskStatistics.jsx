import React from 'react'

const TaskStatistics = () => {
  return (
    <div className='flex justify-between gap-5 screen'>
        <div className='rounded-xl py-6 px-9 w-[45%] p-10 bg-red-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] p-10 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] p-10 bg-emerald-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] p-10 bg-cyan-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>
      
    </div>
  )
}

export default TaskStatistics
