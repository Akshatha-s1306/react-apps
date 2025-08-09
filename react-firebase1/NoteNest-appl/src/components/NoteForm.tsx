import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'
import {db} from '@/lib/firebase'
 // Assuming you have a db module for Firebase operations
 import { collection, addDoc,serverTimestamp } from 'firebase/firestore'
import toast from 'react-hot-toast';
const NoteForm = () => {



    const[note, setNote] = useState('');
    const[loading, setLoading] = useState(false); 

    const handlesubmit = async() => {
        if(!note.trim()) {
            toast.error('Please enter a note before saving.');
            
        }else{
            setLoading(true);
        await addDoc(collection(db, 'notes'), {
            content: note,
            createdAt: serverTimestamp(),
        })
        setNote('');
        setLoading(false);
        }
        

    }
  return (
    <div className='space-y-4 p-4 bg-white shadow-md rounded-lg'>
      <Input
       placeholder='Type your note here...(max 1000 charcters'
       value={note}
       maxLength={1000}
       onChange={(e) => setNote(e.target.value)}
      />
      <Button className='w-full mt-3' onClick={handlesubmit}  disabled={loading}    >
        {loading ?" Saving..." : " Save Note "} 
      </Button>
    </div>
  )
}

export default NoteForm
