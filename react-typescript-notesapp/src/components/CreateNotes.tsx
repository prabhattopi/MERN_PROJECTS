import * as React from 'react';
import {useRef} from "react"
import { Form,Button,Alert } from 'react-bootstrap';
import { Note } from '../models/note.mode';

interface ICreateNotesProps {
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes,setNotes}) => {
    const [error,setError]=React.useState<string>("")
    const titleRef=useRef<HTMLInputElement | null>(null)
    const textRef=useRef<HTMLTextAreaElement | null>(null);
    const colorRef=useRef<HTMLInputElement | null>(null)
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault()
        if(titleRef.current?.value===""||textRef.current?.value===""){
            return setError("All Fields are mandatory")
        }
         setError("")
            setNotes([...notes,{
                id:(new Date()).toString(),
                title:(titleRef.current as HTMLInputElement).value,
                text:(textRef.current as HTMLTextAreaElement).value,
                color:(colorRef.current as HTMLInputElement).value,
                date:(new Date()).toString()

            }]);

            (titleRef.current as HTMLInputElement).value="";
            (textRef.current as HTMLTextAreaElement).value="";
          
        

    }
  return(
    <>
    <h2>Create Form</h2>
    {error&&<Alert variant="danger">{error}</Alert>}
    <Form className="mb-3 mt-3" onSubmit={(e)=>handleSubmit(e)}>
        <Form.Group className="mb-3"controlId='formBasicTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title for Notes" ref={titleRef}/>
          
        </Form.Group>
        <Form.Group className="mb-3"controlId='formBasicText'>
            <Form.Label>Text</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Text" as="textarea" rows={3} ref={textRef}/>
          
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
            <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" ref={colorRef}/>
          
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      

    </Form>
    </>
  ) ;
};

export default CreateNotes;
