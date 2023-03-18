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
    <div>
      <Header />
      
      <FormArea addNote={addNote} />
      
      {notes.map((note, index ) => (
        <Note id={index} delNote={delNote} title={note.title} content={note.content} />
      ))}
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default App
