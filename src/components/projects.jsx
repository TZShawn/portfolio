import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import focus from './images/focus.png'
import leaguebot from './images/leaguebot.png'
import signsl from './images/signsl.png'
import navig from './images/navig.png'
import studio from './images/studio.png'
import pomod from './images/pomod.png'
import circle from './images/circleio.png'
import hand from './images/handwritten.png'
import value from './images/valuex.png';

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
                                <Card.Img className="frontc" src={studio} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%' }}>
                                        <h2 className="head2 desctex">A study aid tool that determines if users are focused</h2>
                                        <strong><a style={butcss} href="https://devpost.com/software/studi-io"><i class="fab fa-dev"></i>  Devpost</a></strong>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <Card.Img className="frontc" src={signsl} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%'}}>
                                        <h2 className="head2 desctex">A machine learning sign language translator</h2>
                                        <strong><a style={butcss} href="https://devpost.com/software/sign-slate"><i class="fab fa-dev"></i>  Devpost</a></strong>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <Card.Img className="frontc" src={focus} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%' }}>
                                        <h2 className="head2 desctex">A prototype of studi.io that determines if users are focused</h2>
                                        <strong><a style={butcss} href="https://devpost.com/software/focus-ulvbr3"><i class="fab fa-dev"></i>  Devpost</a></strong>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>

                    <div className="container columns is-desktop is-centered" style={row}>  
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <Card.Img className="frontc" src={navig} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%' }}>
                                        <h2 className="head2 desctex">A carbon emissions calculator for any given trip</h2>
                                        <strong><a style={butcss} href="https://devpost.com/software/navi-green"><i class="fab fa-dev"></i>  Devpost</a></strong>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <Card.Img className="frontc" src={leaguebot} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%' }}>
                                        <h2 className="head2 desctex">A discord bot for League of Legends which generates
                                        champion setups and player stats</h2>
                                        <strong><a style={butcss} href="https://github.com/TZShawn/LOL-stat-bot"><i class="fab fa-github"></i>  Github</a></strong>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <Card.Img className="frontc" src={pomod} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%'}}>
                                        <h2 className="head2 desctex">A timer used to help users track their study habits 
                                        through the pomodoro technique</h2>
                                        <strong><a style={butcss} href="https://github.com/TZShawn/Pomodoro_Ext"><i class="fab fa-github"></i>  Github</a></strong>
                                    </div>
                                </Card.ImgOverlay> 
                            </Card>
                        </div>
                    </div>

                    <div className="container columns is-desktop is-centered" style={row}>  
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <Card.Img className="frontc" src={value} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%' }}>
                                        <h2 className="head2 desctex">A second hand marketplace where users sell unwanted items to others at a heavily discounted price</h2>
                                        <strong><a style={butcss} href="https://devpost.com/software/ValuEx"><i class="fab fa-dev"></i> Devpost</a></strong>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: '2.5%', borderTop: 'solid 2px black'}}>
                    <strong><h1 className="head1" style={{fontSize:'40px'}}>Upcoming Projects</h1></strong>

                    <div className="container columns is-desktop is-centered" style={row}>  
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <Card.Img className="frontc" src={circle} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%' }}>
                                        <h2 className="head2 desctex" style={{paddingTop: '10%', marginBottom: '10%'}}>A networking tool for aspiring 
                                        creators to build a team</h2>
                                        {/*<strong><a style={butcss}><i class="fab fa-github"></i>  Github</a></strong>*/}
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="column" style={colcss}>
                            <Card className="projcard" style={cardcss}>
                                <Card.Img className="frontc" src={hand} alt="" style={cardcss}/>
                                <Card.ImgOverlay>
                                    <div className="hov" style={{height: '100%' }}>
                                        <h2 className="head2 desctex" style={{paddingTop: '10%', marginBottom: '10%'}}>A machine learning
                                        program that converts handwriting to text to aid people with improving their handwriting</h2>
                                        {/*<strong><a style={butcss}><i class="fab fa-github"></i>  Github</a></strong>*/}
                                    </div>
                                </Card.ImgOverlay>
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

const butcss = {
    borderRadius: '50px',
    backgroundColor: 'white',
    fontSize: '20px',
    marginTop: '10%',
    borderStyle: 'solid',
    borderWidth: 'thick',
    borderColor: 'black',
    color: 'black',
    padding: '.5% 1.5%'
}

export default Projects;