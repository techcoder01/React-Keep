import React, { useState } from 'react';
import { Fab, Paper, TextField } from '@material-ui/core';
import AddIcons from '@material-ui/icons/Add';

function FormArea({ addNote }) {

    const [note, setNote] = useState(
        {
            title: "",
            content: "",
        }
    );

    function clickHandler() {

        addNote(note);
        setNote(
            {
                title: "",
                content: "",
            }
        );
    }

    function changeHandler(event) {

        const { name, value } = event.target;

        setNote(preValues => {
            return {
                ...preValues,
                [name]: value,
            }
        });
    }

    return (
        <section>
            <Paper style={
                {
                    background: 'rgba(255, 255, 255, .3)',
                    BoxShadow: '0 5px 10px rgba(0, 0, 0, .6)',
                    margin: '10px',
                    padding: '25px 50px'
                }
            }>
                <form>
                    <TextField
                        onChange={changeHandler}
                        name='title'
                        value={note.title}
                        label="Title"
                        fullWidth
                        autoComplete='off'
                    />

                    <TextField
                        onChange={changeHandler}
                        name='content'
                        value={note.content}
                        label="Content"
                        multiline
                        minRows={5}
                        fullWidth
                        autoComplete='off'
                    />

                    <Fab onClick={clickHandler} style={{ marginTop: '20px' }}>
                        <AddIcons />
                    </Fab>

                </form>
            </Paper>
        </section>
    )
}

export default FormArea;
