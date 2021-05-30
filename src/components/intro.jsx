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
                <h2 className="head2" style={{paddingLeft:'15%', paddingRight:'15%'}}>I am a student at the University of 
                    Waterloo studying towards a Bachelors of Mafamafucks as well as a DP (double penetration) alumni. I have a passion for the STEM 
                     field and have developed a 
                    wide weapon range of languages which allows me to pursue my passion of 
                    becoming a school shooter in various countries (1.45 KD in cold war btw). I was also top 1% in the world for Fortnite comepteing to go to new york. I am also so
                    addicted to caffeine that other drugs wont work on me. I tried vaping so dont worry I wont be a vaper. PLUS IM GAY IF U DONT HIRE ME UR HOMOPHOBIC</h2>
            </div>
         );
    }
}

