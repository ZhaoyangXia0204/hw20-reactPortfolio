import React from 'react';
// import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

function Projects() {
    return (
        <div className="projects">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h1 class="card-title">Personal-dashboard</h1>
                    <p class="card-text">Personal Dashboard is a user specific home page designed to simplify and condense all relevant information for the day onto one page. With news, weather, stock market data, live traffic maps, a scheduler and links to facebook, twitter, github, linkedIn and google plus. this is a one stop HUD for your browser.</p>
                    <a href="https://github.com/ZhaoyangXia0204/personal-dashboard" class="card-link">https://github.com/ZhaoyangXia0204/personal-dashboard</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h2 class="card-title">DonorSpot</h2>
                    <p class="card-text">This full-stack web application will allow users to find charities that they wish to donate to. In addition, users can create an account and create a charity/raise funds for a particuluar cause.</p>
                    <a href="https://github.com/ZhaoyangXia0204/DonorSpot" class="card-link">https://github.com/ZhaoyangXia0204/DonorSpot</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Project 3</h3>
                    <p class="card-text">project3</p>
                    <a href="#" class="card-link">project3</a>
                </div>
            </div>
        </div>
    )
}


export default Projects;