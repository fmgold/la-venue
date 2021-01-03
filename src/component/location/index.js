import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1964533487144!2d4.625872114103829!3d8.480269993902667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364c95962631ff%3A0xf108c25e9dafc022!2sOke%20Odo%20Bus%20Stop!5e0!3m2!1sen!2sng!4v1573584990930!5m2!1sen!2sng" 
            width="100%" 
            height="500" 
            frameBorder="0" 
            allowFullscreen="">

            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location
