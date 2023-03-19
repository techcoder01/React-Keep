import React from 'react';
import { Button, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function Note({ title, content, id, delNote }) {

    function clickHandler() {
        delNote(id);
    }

    return (

        <Paper style={
            {
                background: 'rgba(255, 255, 255, .3)',
                BoxShadow: '0 5px 10px rgba(0, 0, 0, .6)',
                minWidth: "200px",
                minHeight: "200px",
                maxWidth: "200px",
                maxHeight: "200px",
                padding: "10px",
                margin: "10px",
                position: "relative",
                "overflow-y": "auto",
            }
        }>

            <h1>{title}</h1>
            <p>{content}</p>

            <Button onClick={clickHandler} style={
                {
                    position: "absolute",
                    top: "10px",
                    right: "5px",
                    backgroundColor: "#fff",
                }
            }>
                <DeleteIcon style={{ color: 'red' }} />
            </Button>

        </Paper>

    )
}

export default Note
