import React, { Component } from 'react'

export class AddTask extends Component {
    state={
        text :""
    }
    handleChange = (e) =>{
        console.log(e)
        this.setState({ text:e.target.value  });

    }
        
    
    render() {
        return (
            <div className="add">
                <input type="text"
                onChange={this.handleChange}
                value={this.state.text}/>
                <button onClick={()=>{this.props.handleAdd(this.state.text);this.setState({ text: "" });}}>ADD</button>
            </div>
        )
    }
}

export default AddTask
