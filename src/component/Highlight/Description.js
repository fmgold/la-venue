import React from 'react'
import Fade from 'react-reveal/Fade'

const Description = () => {
    
    return (
        <Fade delay={500}>
            <div className="center_wrapper">
                <div className="highlight_wrapper">
                    <h2>Highlights</h2>
                </div>
                
                <div className="highlight_description">
                There are lots of great programming quotes on the internet. 
                We’ve decided to make some into visual quotes to share via our Instagram account @made4dev. 
                We hope to share the best quotes on a daily basis to give you some inspiration and motivation.
                </div>

            </div>
        </Fade>
    )
}

export default Description
