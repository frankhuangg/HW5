import React from 'react';
class ToDoTitle extends React.Component { 
    render () { 
    return(
        <header style={headerStyle}>
     <h1>CGU Todo list</h1>
     </header>
    )
    } 
   }
   const headerStyle = {
    color:'#61dafb',
    textAlign: 'center',
    padding: '5px'
}

   export default ToDoTitle;