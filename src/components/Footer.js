import { Paper } from '@material-ui/core'
import React from 'react'

function Footer() {
  return (
    <div>
    <Paper style={{marginTop: '20px'}} square elevation = {3}>
      <p style={{position:"absolute" , bottom: "0", width: '100%' , textAlign: 'center'}}>Copyright &copy; {new Date().getFullYear()} Abdul Hannan</p>
      </Paper>
    </div>
  )
}

export default Footer
