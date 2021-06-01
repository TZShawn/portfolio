import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imaged:["fab fa-css3-alt fa-3x", "fab fa-python fa-3x", "fab fa-java fa-3x", "fab fa-js fa-3x", 
                    "fab fa-html5 fa-3x", "fab fa-react fa-3x"]
         }
    }
    render() { 
        const imag = this.state.imaged.map(i => <div className="column is-auto-desktop" 
                            style={{padding: 0, margin: 0}}>
                            <i class={i} id="bruh" style={{width:'40%', paddingRight:'5%', color:'white'}} /></div>)
        return ( 
            <div style={{paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#7510F7'}}>
                    <h1 className="head1" style={{fontSize: '300%', color: 'white', paddingBottom: '2%'}}>Skills</h1>
                    <div className="columns" id=" ski" style={{margin: '0px 10%', paddingLeft: '15%', paddingRight: '15%'}}>
                        {imag}
                </div>
            </div>
         );
    }
}
 
export default Skills;