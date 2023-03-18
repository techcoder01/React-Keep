import { Fab, Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import AddIcons from '@material-ui/icons/Add'
import { Notes } from '@material-ui/icons';
function FormArea({addNote}) {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function clickHandler() {
        addNote(note)
        setNote({
            title: "",
            content: "",
        });
    }

    function changeHandler(event) {
        const { name, value } = event.target
        setNote(preValues => {
            return {
                ...preValues,
                [name] : value,
            }
        })
    }
    
    return (
    <div>
            <Paper style={{margin: '10px 10%' , padding: '25px 50px'}}>
            <form>
                    <TextField
                        onChange={changeHandler}
                        name='title'
                        value={note.title}
                        label="Title"
                        fullWidth
                        autoComplete='off' />
                    
                    <TextField
                        onChange={changeHandler}
                        name='content'
                        value={note.content}
                        label="Content"
                        multiline
                        rows={5}
                        fullWidth
                        autoComplete='off' />
                    
                  <Fab onClick={clickHandler} style={{marginTop: '20px'}}>
                      <AddIcons/>
                </Fab>
            </form>
        </Paper>
    </div>
  )
}

export default FormArea
