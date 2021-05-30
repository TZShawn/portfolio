import React, { Component } from 'react';
import {Row, Card, div} from 'react-bootstrap'
import focus from './images/focus.png'
import leaguebot from './images/leaguebot.png'
import signsl from './images/signsl.png'
import navig from './images/navig.png'
import studio from './images/studio.png'
import seir from './images/seir.png'
import pomod from './images/pomod.png'
import LED from './images/LEDLight.png'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: ['Studi.io', 'Sign Slate', 'Focus++', 'NaviGreen', 'League Stat Bot', 'Pomodoro', 'Arduino LED', 'SEIR Model']
         }
    }
    render() { 
        return ( 
            <div className="container" style={{paddingTop: '5%', paddingBottom: '5%'}}>
                <strong><h1 className="head1" style={{fontSize:'40px', display:'inline'}}>Projects</h1></strong>

                <div className="container columns is-desktop is-centered" style={row}>  
                    <div className="column" style={colcss}>
                        <Card style={cardcss}>
                            <Card.Img src={studio} alt="" style={cardcss}/>
                        </Card>
                    </div>
                    <div className="column" style={colcss}>
                        <Card style={cardcss}>
                            <Card.Img src={signsl} alt="" style={cardcss}/>
                        </Card>
                    </div>
                    <div className="column" style={colcss}>
                        <Card style={cardcss}>
                            <Card.Img src={focus} alt="" style={cardcss}/>
                        </Card>
                    </div>
                </div>

                <div className="container columns is-desktop is-centered" style={row}>  
                    <div className="column" style={colcss}>
                        <Card style={cardcss}>
                            <Card.Img src={navig} alt="" style={cardcss}/>
                        </Card>
                    </div>
                    <div className="column" style={colcss}>
                        <Card style={cardcss}>
                            <Card.Img src={leaguebot} alt="" style={cardcss}/>
                        </Card>
                    </div>
                    <div className="column" style={colcss}>
                        <Card style={cardcss}>
                            <Card.Img src={pomod} alt="" style={cardcss}/>
                        </Card>
                    </div>
                </div>

                <div className="container columns is-desktop is-centered" style={row}>  
                    <div className="column" style={colcss}>
                        <Card style={cardcss}>
                            <Card.Img src={LED} alt="" style={cardcss}/>
                        </Card>
                    </div>
                    <div className="column" style={colcss}>
                        <Card style={cardcss}>
                            <Card.Img src={seir} alt="" style={cardcss}/>
                        </Card>
                    </div>
            </div>
            </div>
         );
    }
}
 
const cardText = {
    paddingTop: '3%', 
}

const row = {
    paddingTop: 0,
    textAlign: 'center',
}

const cardcss = {
    borderRadius: '20px', 
    minHeight: '25vh',
}

const colcss = {
    maxWidth: '50vh',
    display: 'inline'
}
export default Projects;