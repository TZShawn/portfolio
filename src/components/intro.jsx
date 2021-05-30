import React, { Component } from 'react';

export default class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
        this.props ={
            color: ''
        }
    }
    render() { 
        return ( 
            <div style={{width:'100%', backgroundColor: '#7510F7', color:'white', paddingTop:'2.5%', paddingBottom:'5%'}}>
                <h1 className="head1">Hi, I'm Shawn</h1>
                <h2 className="head2" style={{paddingLeft:'15%', paddingRight:'15%'}}>Hi</h2>
            </div>
         );
    }
}

