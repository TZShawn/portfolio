import React, { Component } from 'react';
import { Card, Col, Row, Container} from 'react-bootstrap'

export default class Jobcard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                
                    <div className="columns is-desktop" style={{marginRight: '10%', marginLeft: '10%', marginTop: '-4%'}}>
                        <div  className="column" style={{paddingTop: '0%', paddingBottom: '0%'}}>
                            <Card className="mb-3" style={{color: '#000', borderRadius: '25px', paddingTop: '5%', minHeight:'100%', margin: 0}}>
                                <i class="fas fa-code fa-3x"></i>
                                <Card.Title style={{paddingTop: '3%'}}>Developer</Card.Title>
                                <Card.Text style={{paddingLeft: '3%', paddingRight: '3%'}}>I can create scripts and applications utilizing a variety of languages</Card.Text>
                            </Card>
                        </div>
                        
                        <div className="column" style={{paddingTop: '0%', paddingBottom: '0%'}}>
                            <Card className="mb-3" style={{color: '#000', borderRadius: '25px', paddingTop: '5%', minHeight:'100%', margin: 0}}>
                                <i class="fas fa-flask fa-3x"></i>
                                <Card.Title style={{paddingTop: '3%'}}>Data Scientist</Card.Title>
                                <Card.Text style={{paddingLeft: '3%', paddingRight: '3%'}}>I specilize in backend data base manipulation and generation of plots and tables</Card.Text>
                            </Card>
                        </div>

                        <div className="column" style={{paddingTop: '0%', paddingBottom: '0%'}}>
                            <Card className="mb-3" style={{color: '#000', borderRadius: '25px', paddingTop: '5%', minHeight:'100%', margin: 0}}>
                                <i class="fab fa-edge fa-3x"></i>
                                <Card.Title style={{paddingTop: '3%'}}>Full-stack Dev</Card.Title>
                                <Card.Text style={{paddingLeft: '3%', paddingRight: '3%'}}>I create simplisitc and minimal front end websites including 
                                    various animations and backend javascript and nodejs functions
                                </Card.Text>
                            </Card>
                        </div>
                    </div>
                  
            </div>
         );
    }
}
