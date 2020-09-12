import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Scroll from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css";



import Navbar from './navbar/Navbar'

//css
import './css/styles.css'

import Image1 from '../../media/images/cards/1.JPG'
import Image2 from '../../media/images/cards/2.JPG'
import Image3 from '../../media/images/cards/3.JPG'
import Image4 from '../../media/images/cards/4.JPG'

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

               <Navbar />
            
                <div className="ui container">

                    <div className='header-intro'>
                        
                        <div></div>
                        <p data-aos="fade-right" >
                        Beat the heat! Rent an AirCooler!
                         It’s not just a fan but it’s an EVAPORATIVE AIR COOLER 
                         guaranteed to blast cooler air and give comfort to your guests 
                         on special events.


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
                                <img src={Image1} alt={Image1}/>

                                <h5>Weddings</h5> <br/>
                            </div>

                            <div className="service-offered-2">
                                <img src={Image2} alt={Image2}/>

                                <h5>Caterings</h5> <br/>
                            </div>

                            <div className="service-offered-3">
                                <img src={Image3} alt={Image3}/>

                                <h5>Basketball Events</h5> <br/>
                            </div>

                            <div className="service-offered-4">
                                <img src={Image4} alt={Image4}/>

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