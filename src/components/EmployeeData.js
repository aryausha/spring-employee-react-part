import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'

export default class EmployeeData extends Component {

    state={
        Name:"",
        Designation:"",
        Salary:""
    }

    onHand=()=>
    {
        console.log(this.state)
    }
     dataHandling=(event)=>{
         this.setState({
             [event.target.name]:event.target.value


         })
     }
    render() {
        return (
            <div>
                <TextField 
                variant="outlined"
                margin="normal"
                name="Name"
                fullWidth
                required
                type="text"
                onChange={this.dataHandling}
                label="Name"
                />

                <TextField 
                variant="outlined"
                margin="normal"
                fullWidth
                required
                type="text"
                name="Designation"
                label="Designaton"
                onChange={this.dataHandling}
                />

                <TextField 
                variant="outlined"
                margin="normal"
                type="text"
                label="Salary"
                name="Salary"
                fullWidth
                required
                onChange={this.dataHandling}

                />

                <Button variant="contained"
                margin="normal"
                fullWidth
                required
                color="primary"
                onClick={this.onHand}
                >Login</Button>
                
                
            </div>
        )
    }
}
