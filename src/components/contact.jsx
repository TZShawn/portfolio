import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imagec:["fab fa-github fa-3x", "fab fa-linkedin fa-3x", "far fa-envelope fa-3x", 
                    "fab fa-facebook fa-3x"]
         }
    }
    render() { 
        const imag = this.state.imagec.map(i => 
            <li style={{display: 'inline', padding: '2%'}}><a><i class={i}/></a></li>)
        return ( 
            <div style={{paddingTop: '2%'}}>
                <div style={{paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#7510F7'}}>
                    <h1 className="head1" style={{color: 'white', paddingBottom: '2%'}}>Contact Me</h1>
                    <div style={{display: 'flex', justifyContent: 'center', 
                    textAlign: 'center', color: 'white', overflow: 'none', paddingLeft: '15%', paddingRight: '15%'}}>
                        <h2 className="head2" style={{paddingRight: '2.5%'}}>Phone number: <a href="tel:6478793522" 
                            style={{color:'white'}}>(647)-879-3522</a></h2>
                        <h2 className="head2" style={{paddingLeft: '2.5%'}}>Email: <a 
                            href="mailto:shawnxue.c@gmail.com" style={{color:'white'}}>shawnxue.c@gmail.com</a></h2>
                    </div>
                    
                        <ul style={{listStyleType: 'none', display: 'inline-text', color:'white', paddingTop: '2%'}}>
                            {imag}
                        </ul>
                </div>
            </div>
         );
    }
}
 

 
export default Contact;