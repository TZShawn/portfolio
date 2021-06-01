import React, { Component } from 'react';

export default class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="front">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1 className="topname" style={{fontSize:"30px", padding: "2%"}}><strong style={{color:"#7510f7"}}>Shawn Xue</strong></h1>
                    <strong><a className="jumbobut" style={butcss}>Contact Me</a></strong>
                </div>
                <h1 style={{fontSize:"50px", paddingTop: "10%", paddingLeft: '20%', 
                    paddingRight: '20%'}} className="animate__animated animate__fadeIn"><strong>Hi, I'm Shawn Xue</strong></h1>
                <h2 className="head2 animate__animated animate__fadeIn animate__delay-0.5s" style={{paddingTop: '2%', paddingLeft: '20%', 
                    paddingRight: '20%'}}><strong>I'm an aspiring developer and data scientist
                                                 whos always willing to learn more</strong></h2>
            </div>
         );
    }
}

const butcss = {
    borderRadius: '50px',
    backgroundColor: 'white',
    fontSize: '25px',
    width: '120%',
    marginTop: '20%',
    marginLeft: '-50%',
    borderStyle: 'solid',
    borderWidth: 'thick',
    borderColor: '#7510F7',
    color: '#7510F7',
    padding: '.5% 10%',
    float: 'left',
}