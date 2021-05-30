import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{paddingTop: '30px'}}>
                <h1 className="head1">Resume</h1>
                <h2 className="head2" style={{marginBottom: '2%', paddingLeft: '15%', paddingRight: '15%'}}>For additional infromation please feel free to refer
                    to my resume linked below
                </h2>
                <strong><a style={butcss}>Download</a></strong>
            </div>
         );
    }
}
 
const butcss = {
    borderRadius: '50px',
    backgroundColor: 'white',
    fontSize: '30px',
    marginTop: '10%',
    borderStyle: 'solid',
    borderWidth: 'thick',
    borderColor: '#7510F7',
    color: '#7510F7',
    padding: '.5% 1.5%'
}

export default Resume;