import React from 'react'


function CallToAction() {
    return (
        <div>
            {/*<!-- Call to Action -->*/}
            <section className="content-section bg-primary text-white">
                <div className="container text-center">
                    <h2 className="mb-4">The buttons below are impossible to resist...</h2>
                    <a href="#!" className="btn btn-xl btn-light mr-4">Click Me!</a>
                    <a href="#!" className="btn btn-xl btn-dark">Look at Me!</a>
                </div>
            </section>

            {/*<!-- Map -->*/}
            <div id="contact" className="map">
            <iframe title="My Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.982832696939!2d-80.20508118431998!3d25.771130583632385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6919588225b%3A0x3d561a6b447200c8!2s515%20SW%203rd%20St%2C%20Miami%2C%20FL%2033130!5e0!3m2!1sen!2sus!4v1593898511269!5m2!1sen!2sus" width="600" height="450" frameBorder="0"  allowFullScreen="" aria-Hidden="false" tabIndex="0"></iframe>
            </div>

        </div>
    )
}





export default CallToAction