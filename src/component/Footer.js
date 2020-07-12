import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <div>
            {/*<!-- Footer -->*/}
            <footer class="footer text-center">
                <div class="container">
                    <ul class="list-inline mb-5">
                        <li class="list-inline-item">
                            <a class="social-link rounded-circle text-white mr-3" href="#!">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-link rounded-circle text-white mr-3" href="#!">
                            <FontAwesomeIcon icon={faBook} />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-link rounded-circle text-white" href="#!">
                            <FontAwesomeIcon icon={faCalendar} />
                            </a>
                        </li>
                    </ul>
                    <p class="text-muted small mb-0">Copyright &copy; Yariel Dominguez UI/Web Developer 2020</p>
                </div>
            </footer>

            {/*<!-- Scroll to Top Button-->*/}
            <a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
            <FontAwesomeIcon icon={faHome} />
            </a>
        </div>
    )
}
export default Footer