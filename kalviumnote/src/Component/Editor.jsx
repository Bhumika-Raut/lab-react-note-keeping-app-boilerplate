import { Component } from "react";

export default class Editor extends Component{

           constructor(props) {
            super(props);
        
            this.handleChange = this.handleChange.bind(this);
    
            this.state =
             { 
                value: ''
            };
                       
        }
    
    render(){
       
        
        return(
            <>
            <div className="main">
                <div className="text">
                    <h3>Input</h3>
                    <textarea className="input-text"onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="note">
                    <h3>Pro Note</h3>
                    {/* <textarea className="input-text"onChange={this.handleChange} defaultValue={this.state.value}/> */}
                
                    <div className="note-text">{this.state.value}</div>
                </div>                
            </div>
            
            </>
            
        )  
        
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
}