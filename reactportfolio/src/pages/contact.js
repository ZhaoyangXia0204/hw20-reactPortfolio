import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardTitle, CardText } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="contact-things">
                <div className="contact-grid">

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px' }}>Contact Info</CardTitle>
                        <CardText>
                            Name: Zhaoyang Xia
                            Phone Number: 848-565-8272
                            E-mail: zx70@scarletmail.rutgers.edu
                        </CardText>


                    </Card>
                </div>
            </div>
            <Footer />
            </div>
            
        )

    }
}

export default Contact;
