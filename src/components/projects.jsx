import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import focus from './images/focus.png'
import leaguebot from './images/leaguebot.png'
import signsl from './images/signsl.png'
import navig from './images/navig.png'
import studio from './images/studio.png'
import pomod from './images/pomod.png'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: ['Studi.io', 'Sign Slate', 'Focus++', 'NaviGreen', 'League Stat Bot', 
                    'Pomodoro', 'Arduino LED', 'SEIR Model']
         }
    }
    render() { 
        return ( 
            <div className="container" style={{paddingTop: '5%', paddingBottom: '5%',}}>
                <div style={{paddingBottom:'2.5%'}}>
                    <strong><h1 className="head1" style={{fontSize:'40px', marginBottom:'2%'}}>Projects</h1></strong>

                    <div className="container columns is-desktop is-centered" style={row}>  
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>
                                <Card.Img className="frontc" src={studio} alt="" style={cardcss}/>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>  
                                <Card.Img className="frontc" src={signsl} alt="" style={cardcss}/>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>
                                <Card.Img className="frontc" src={focus} alt="" style={cardcss}/>
                            </Card>
                        </div>
                    </div>

                    <div className="container columns is-desktop is-centered" style={row}>  
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>
                                <Card.Img className="frontc" src={navig} alt="" style={cardcss}/>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>
                                <Card.Img className="frontc" src={leaguebot} alt="" style={cardcss}/>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>
                                <Card.Img className="frontc" src={pomod} alt="" style={cardcss}/> 
                            </Card>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: '2.5%', borderTop: 'solid 2px black'}}>
                    <strong><h1 className="head1" style={{fontSize:'40px'}}>Upcoming Projects</h1></strong>

                    <div className="container columns is-desktop is-centered" style={row}>  
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>
                                <Card.Img className="frontc" src={studio} alt="" style={cardcss}/>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>  
                                <Card.Img className="frontc" src={signsl} alt="" style={cardcss}/>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <div className="hov" style={{display: 'none'}}>
                                    <h2 className="head2">this is a placeholder</h2>
                                </div>
                                <Card.Img className="frontc" src={focus} alt="" style={cardcss}/>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
         );
    }
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