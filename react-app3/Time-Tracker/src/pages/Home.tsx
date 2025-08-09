import TimeChart from '@/components/TimeChart';
import TimeForm from '@/components/TimeForm'
import React, { useState } from 'react'

const Home = () => {
    const[data,setData]=useState<{activity:string ; timeSpent:number}[]>([]);

    const handleAdd=(activity:string, timeSpent:number)=>{
       console.log('Activity:', activity)

       setData((prevData) => [...prevData, { activity, timeSpent }]);
       console.log('Data:', data)
       console.log('Hours:', timeSpent) 
    }
  return (
    <div className='max-w-2xl mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>⌚ Time Tracker</h1>
        <TimeForm onAdd={handleAdd}/>
        <TimeChart data={data}/>
    </div>
  )
}

export default Home

