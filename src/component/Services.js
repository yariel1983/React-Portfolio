import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



function Services () {

    return (
        <div>
            {/*<!-- Services -->*/}
            <section class="content-section bg-primary text-white text-center" id="services">
                <div class="container">
                    <div class="content-section-heading">
                        <h3 class="text-secondary mb-0">Services</h3>
                        <h2 class="mb-5">What We Offer</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <span class="service-icon rounded-circle mx-auto mb-3">
                            <FontAwesomeIcon icon={faMobile} />
                            </span>
                            <h4>
                                <strong>Responsive</strong>
                            </h4>
                            <p class="text-faded mb-0">Looks great on any screen size!</p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <span class="service-icon rounded-circle mx-auto mb-3">
                            <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                            <h4>
                                <strong>Redesigned</strong>
                            </h4>
                            <p class="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <span class="service-icon rounded-circle mx-auto mb-3">
                            <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <h4>
                                <strong>Favorited</strong>
                            </h4>
                            <p class="text-faded mb-0">Millions of users
                            <FontAwesomeIcon icon={faHeart} />
            Start Bootstrap!</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <span class="service-icon rounded-circle mx-auto mb-3">
                            <FontAwesomeIcon icon={faQuestion} />
                            </span>
                            <h4>
                                <strong>Question</strong>
                            </h4>
                            <p class="text-faded mb-0">I mustache you a question...</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}



export default Services

