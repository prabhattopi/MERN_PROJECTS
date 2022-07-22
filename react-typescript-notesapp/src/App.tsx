import React,{useState} from 'react';

import './App.css';
import {Container,Row,Col} from "react-bootstrap"
import {Note} from "./models/note.mode"

import Navbar from 'react-bootstrap/Navbar';
import Header from './components/Header';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';

// let notes=JSON.parse(localStorage.getItem("prab"))

function App() {
  //TypeScript Identify fataksay TODO(😎😎😎😎😎😎)
  //typescript makes discipline in our code
  //benefit its identify errors early
  // const name:string=10(😖😖😖😖)
  // const name:string="Prabaht"

  const [notes,setNotes]=useState<Note[]
  >([{
    id:(new Date()).toString(),
    title:"Mettings",
    text:"Schedule metting with UI/UX Team",
    color:"#dfdfdf",
    date:(new Date()).toString()

  }])



  return (
   <>
     <Header/>
     <Container className="mt-5">
      <Row>
        <Col>
        <NotesList notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
     </Container>
    </>
  );
}




export default App;
