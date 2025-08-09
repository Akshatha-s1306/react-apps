import React, { act, useState} from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

//interface-to tell what kind of porps ur givinh 
interface Props{
    onAdd: (activity: string, timeSpent: number) => void;
}   


const TimeForm = ({onAdd}:Props) => {

    const [activity ,setActivity] = useState('')
    const [timeSpent, setTimeSpent] = useState('')

    const handlesubmit = () => {
        if (!activity.trim()|| !timeSpent) {
            alert('Please fill in all fields')
        }
        onAdd(activity, parseInt(timeSpent));
        setActivity('');
        setTimeSpent('');

    }
  return (
    <div className='space-y-4'>
      <Input
        placeholder='activities  [ex: coding, reading, etc.]'
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <Input
        type='number'
        placeholder='time spent in minutes'
        value={timeSpent}
        onChange={(e) => setTimeSpent(e.target.value)}
        />



        <Button className='w-full'onClick={handlesubmit}>
            Add Activity
            </Button>
    </div>
  )
}

export default TimeForm
