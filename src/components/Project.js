import React from 'react';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
        <div className="projects">
            <Card className="text-center" style={{ width: '40rem' }}>
                <div class="card-body">
                    <Card.Title>Personal-dashboard</Card.Title>
                    <Card.Body>Personal Dashboard is a user specific home page designed to simplify and condense all relevant information for the day onto one page. With news, weather, stock market data, live traffic maps, a scheduler and links to facebook, twitter, github, linkedIn and google plus. this is a one stop HUD for your browser.</Card.Body>
                    <Card.Link href="https://github.com/ZhaoyangXia0204/personal-dashboard">Github Link</Card.Link>
                </div>
            </Card>
            <Card className="text-center" style={{ width: '40rem' }}>
                <div class="card-body">
                    <Card.Title>DonorSpot</Card.Title>
                    <Card.Body>This full-stack web application will allow users to find charities that they wish to donate to. In addition, users can create an account and create a charity/raise funds for a particuluar cause.</Card.Body>
                    <Card.Link href="https://github.com/ZhaoyangXia0204/DonorSpot">Github Link</Card.Link>
                </div>
            </Card>
            <Card className="text-center" style={{ width: '40rem' }}>
                <div class="card-body">
                    <Card.Title>Project 3</Card.Title>
                    <Card.Body>project3</Card.Body>
                    <Card.Link href="#">project3</Card.Link>
                </div>
            </Card>
        </div>
    )
}


export default Projects;