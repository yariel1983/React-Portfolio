import React from 'react'
import callout from '../img/callout.jpg'


function CallOut() {
    return (
        <div>
            
            {/*<!-- Callout -->*/}
            <section class="callout" style={{ backgroundImage: `url(${require("../img/callout.jpg")})` }}>
                <div class="container text-center">
                    <h2 class="mx-auto mb-5">Welcome to
        <em>your</em>
        next website!</h2>
                    <a class="btn btn-primary btn-xl" href="https://startbootstrap.com/themes/stylish-portfolio/">Download Now!</a>
                </div>
            </section>
        </div>
    )
}







export default CallOut