import React from "react";
import contactpage from "../pages/contact"
function Header() {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand bg-info" href="#">Zhaoyang Xia</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" >About <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={{ contactpage }} tabindex="-1" aria-disabled="true">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}
export default Header;