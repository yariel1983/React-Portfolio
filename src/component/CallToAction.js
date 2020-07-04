import React from 'react'


function CallToAction() {
    return (
        <div>
            {/*<!-- Call to Action -->*/}
            <section class="content-section bg-primary text-white">
                <div class="container text-center">
                    <h2 class="mb-4">The buttons below are impossible to resist...</h2>
                    <a href="#!" class="btn btn-xl btn-light mr-4">Click Me!</a>
                    <a href="#!" class="btn btn-xl btn-dark">Look at Me!</a>
                </div>
            </section>

            {/*<!-- Map -->*/}
            <div id="contact" class="map">
                <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
                <br />
                <small>
                    <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
                </small>
            </div>

        </div>
    )
}





export default CallToAction