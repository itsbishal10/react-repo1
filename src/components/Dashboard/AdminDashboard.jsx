import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>

      <div>
        <form className='flex w-full flex-wrap items-start justify-between bg-red-300'>
            <div className='w-1/2'>
                <div>
            <div> <h3>Task Title</h3>
            <input type="text" placeholder='Make a UI design ' className=' p-2 rounded-lg'/>
            </div>
            <h3>Date</h3>
            <input type="date" />
            </div>
            <div>
            <h3>Assign to </h3>
            <input type="text" placeholder='employee name'/>
            </div>
            <div>
            <h3>Category</h3>
            <input type='text' placeholder='design, dev etc'/>
            </div>
            </div>
           
            <div className='w-1/2'>
            <h3>Description</h3>
            <textarea name="" id="" cols="30" rows="10" ></textarea>
            </div>
            

            <button >Create Task</button>

        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
