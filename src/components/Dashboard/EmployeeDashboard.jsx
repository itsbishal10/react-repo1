import React from 'react'
import Header from '../other/Header'
import TaskStatistics from '../other/taskStatistics'
const EmployeeDashboard = () => {
  return (
        <div className='p-20 bg-[#1C1C1C] h-screen' >
      <Header/><br/>
      <TaskStatistics/>
    </div>

  )
}

export default EmployeeDashboard
