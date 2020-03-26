import React from 'react';
 import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

function Projects() {
    return (
        <div className="projects">
            <Card>
                <div class="card-body">
                    <CardTitle class="card-title">Personal-dashboard</CardTitle>
                    <CardText>Personal Dashboard is a user specific home page designed to simplify and condense all relevant information for the day onto one page. With news, weather, stock market data, live traffic maps, a scheduler and links to facebook, twitter, github, linkedIn and google plus. this is a one stop HUD for your browser.</CardText>
                    <CardActions>https://github.com/ZhaoyangXia0204/personal-dashboard</CardActions>
                </div>
            </Card>
            <Card>
                <div class="card-body">
                    <CardTitle>DonorSpot</CardTitle>
                    <CardText>This full-stack web application will allow users to find charities that they wish to donate to. In addition, users can create an account and create a charity/raise funds for a particuluar cause.</CardText>
                    <CardActions>https://github.com/ZhaoyangXia0204/DonorSpot</CardActions>
                </div>
            </Card>
            <Card>
                <div class="card-body">
                    <CardTitle>Project 3</CardTitle>
                    <CardText>project3</CardText>
                    <CardActions>project3</CardActions>
                </div>
            </Card>
        </div>
    )
}


export default Projects;