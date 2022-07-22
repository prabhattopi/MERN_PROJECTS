import * as React from 'react';
import {Note} from "../models/note.mode"
import Notes from './Notes';
interface INotesListProps {
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({notes,setNotes}) => {
    const handleDelete=(id:string)=>{
        setNotes(notes.filter(e=>e.id!==id))

    }
    const renderNotes=():JSX.Element[]=>{
        return(notes.map(e=>(
            <Notes key={e.id} note={e} handleDelete={handleDelete}/>
        ))
        )
    }
  return (
    <>
    <h2 className='mt-3'>Notes</h2>
    <div>{renderNotes()}</div>
    </>
  ) ;
};

export default NotesList;
