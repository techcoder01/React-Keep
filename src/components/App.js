import React, { useState } from 'react'
import Footer from './Footer'
import FormArea from './FormArea'
import Header from './Header'
import Note from './Note'

function App() {
  const [notes, setNote] = useState([]);
  console.log(notes);

  function addNote(note) {
    setNote(preNotes => {
        return [...preNotes , note]
      })
  }
  
  function delNote(id) {
    setNote(preNotes => {
      return preNotes.filter((note, index) => {
        return index !== id
      })
    })
  }

  return (
    <div style={{background: 'linear-gradient(to left bottom , rgb(110, 187, 232), rgb(183, 152, 240) , rgb(230, 224, 255))'}} >
      <Header />
      
      <FormArea addNote={addNote} />
      
      {notes.map((note, index ) => (
        <Note id={index} delNote={delNote} title={note.title} content={note.content} />
      ))}
      
        <Footer/>
    </div>
  )
}

export default App
