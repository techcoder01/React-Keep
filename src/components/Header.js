import React from 'react'
import Paper from '@material-ui/core/Paper'
function Header() {
  return (
    <Paper style={{padding: '5px' , display: 'flex'}} square elevation={3}>
    <img style={{width: '50px' , paddingRight: "5px"} } src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img>
      <h1 style={{margin:'0' , fontFamily: 'cursive'}}>React Keep</h1>
    </Paper>
  )
}

export default Header
