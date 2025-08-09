import React, { useState,useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, onSnapshot,deleteDoc,doc } from 'firebase/firestore'
import { Button } from './ui/button';
import toast from 'react-hot-toast';

interface Note {
    id: string;
    content: string;
    createdAt?: any; // Adjust type as needed

}
const NoteList = () => {

    const [notes, setNotes] = React.useState<Note[]>([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
            const notesData: Note[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data() 
            })) as Note[];
            setNotes(notesData);
        })
        return () => unsubscribe();
    }, []);
    if(notes.length === 0) {
        return <p className='text-center text-grey-400 mt-4'>No notes yet.Start Typing!!</p>
    }
    const deletenote=async (id: string) => {
        await deleteDoc(doc(db, 'notes', id));
        toast.success('Note deleted successfully!');
        
    }

  return (
    <div className={`grid gap-4 mt-4 ${notes.length==1? "grid-cols-1": "grid-cols-1 md:grid-cols-2"}`}>
      {notes.map((note) => (
        <div key={note.id} className='p-4 bg-white border-grey-200 shadow-md rounded-lg 
         felc items-center justify-betweeen hover:shadow-lg transition-shadow duration-200'>
          <p className='text-base text-gray-800'>{note.content}</p>
          
            <Button variant="destructive" onClick={() => deletenote(note.id)}>
                Delete
                
            </Button>
          
        </div>
      ))}
    </div>
  )
}

export default NoteList
