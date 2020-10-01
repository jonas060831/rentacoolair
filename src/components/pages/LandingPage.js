import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react';
import Scroll from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css";
import MetaTags from 'react-meta-tags';


import Navbar from './navbar/Navbar'

//css
import './css/styles.css'



//scroll
let Link = Scroll.Link;

//container effect
Aos.init({
  duration: 2000           
})


class LandingPage extends Component {
    render() {
        return (
            <div>

                <div className="wrapper">
                    <MetaTags>
                        <title>IWATA Air Cooler for rent</title>
                        <meta name="description" content="IWATA evaporative air cooler for rent. Beat the heat! Guaranteed to blast cooler air and give comfort to your guests on special events. Great for indoor and outdoor activities." />
                        <meta property="og:title" content="IWATA Air Cooler for rent" />
                    </MetaTags>
                    
                </div>


               <Navbar />
            
                <div className="ui container">

                    <div className='header-intro'>
                        
                        <div></div>
                        <p data-aos="fade-right" >
                        IWATA Air Cooler for rent. Beat the heat!
                         It’s not just a fan but it’s an EVAPORATIVE AIR COOLER 
                         guaranteed to blast cooler air and give comfort to your guests 
                         on special events. Great for indoor and outdoor activities.


                            <br/><br/>
                            <Link activeClass="active" to="header3" spy={true} smooth={true} offset={-40} duration={500} onSetActive={this.handleSetActive}>
                                    <Button content='Learn How' icon='chevron down' circular color='orange' labelPosition='right'/>
                            </Link>
                        </p>
                        <div></div>
                </div>

                </div>
               
               

               <div className="ui container services-container" data-aos="fade-right">
                    <h3 className='header3'>
                        Our Services
                    </h3>
                    <br/>
                    <div className='service-offered'>

                            <div className="service-offered-1">
                                <Image src="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/1.JPG" alt="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/1.JPG"/>

                                <h5>Weddings</h5> <br/>
                            </div>

                            <div className="service-offered-2">
                            <Image src="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/2.JPG" alt="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/2.JPG"/>

                                <h5>Caterings</h5> <br/>
                            </div>

                            <div className="service-offered-3">
                            <Image src="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/3.JPG" alt="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/3.JPG"/>

                                <h5>Basketball Events</h5> <br/>
                            </div>

                            <div className="service-offered-4">
                            <Image src="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/4.JPG" alt="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/4.JPG"/>

                                <h5>Religious Events</h5> <br/>
                            </div>


                            <div className="service-offered-5">
                            <Image src="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/5.JPG" alt="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/5.JPG"/>

                                <h5>Inauguration</h5> <br/>
                            </div>


                            <div className="service-offered-6">
                            <Image src="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/6.JPG" alt="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/6.JPG"/>

                                <h5>Any other Services</h5> <br/>
                            </div>

                    </div>
               </div>
               

               <div className='ui container'>

               <div className="contact-person-container" data-aos="fade-right">
                    
                    

                    <div className='contact-person-container-header' >
                        <h3 className='header3'>
                                Contact Us
                        </h3>
                    </div>

                    <div className='contact-person-container-1' >
                        North & part of Metro Manila <br/>

                        <h4 className='contact-person-header'>Rowena</h4> <br/>
                        0917-458-3658
                    </div>

                    <div className='contact-person-container-2' >

                        South & part of Metro Manila <br/>

                        <h4 className='contact-person-header'>Mike</h4> <br/>
                        0917-628-5440 <br/>
                        0917-856-6881
                        
                    </div>

                    <div className='contact-person-container-3' >
                        &nbsp;
                    </div>

                    <div className='contact-person-container-4' >

                        For Complaints: <br/>

                        <h4 className='contact-person-header'>Goalbert</h4> <br/>
                        goalbertgotauco@yahoo.com

                    </div>


               </div>


               </div>
               <br/><br/><br/><br/>
            </div>
        );
    }
}

export default LandingPage;
