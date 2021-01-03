import React, { Component } from 'react'
import MyButton from '../Utils/MyButton'
import Zoom from 'react-reveal/Zoom'

export default class Pricing extends Component {
    
    state={
        position:['system', 'development', 'repairs'],
        prices:['Embedded', 'Front-end', 'Hardware'],
        desc: ['There are lots of great programming quotes on the internet','There are lots of great programming quotes on the internet', 'There are lots of great programming quotes on the internet'],
        linkto:['www.goal.com', 'www.livescore.com','www.google.com'],
        delay:[500,0,500]  

    }

    showBoxes = () => (
         this.state.prices.map((box,i) =>(
           
           <Zoom delay={this.state.delay[i]} key={i}>
                 <div className="pricing_item">
                     <div className="pricing_inner_wrapper">
                         <div className="pricing_title">
                             <span>{this.state.prices[i]}</span>
                             <span>{this.state.position[i]}</span>
                         </div>
                         <div className="pricing_description">
                             {this.state.desc[i]}
                         </div>
                         <div className="pricing_buttons">
                             <MyButton
                                 text="order"
                                 bck="#ffa800"
                                 color="#ffffff"
                                 link={this.state.linkto[i]}
                             />
                         </div>

                     </div>
                 </div>    
           </Zoom>          
         ))    
    )
    
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
                
            </div>
        )
    }
}
