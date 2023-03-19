import React, { useState } from 'react';
import Footer from './Footer';
import FormArea from './FormArea';
import Header from './Header';
import Note from './Note';
import { Container, Box } from '@material-ui/core';
import './App.css';

function App() {

    const [notes, setNote] = useState([]);
    console.log(notes);

    function addNote(note) {
        setNote(preNotes => {
            return [...preNotes, note]
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

        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            justifyContent="space-between"
        >
            <Header />
            <Container >

                <FormArea addNote={addNote} />

                <section className='notes-container'>
                    {notes.map((note, index) => (
                        <Note key={'notes' + index} id={index} delNote={delNote} title={note.title} content={note.content} />
                    ))}
                </section>

            </Container>
            <Footer />

        </Box>
    )
}

export default App;
