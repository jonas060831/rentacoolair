import React, { Component } from 'react';
import { Button, Image, Card, Icon } from 'semantic-ui-react';
import Scroll from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Helmet} from "react-helmet";
import ImageGallery from 'react-image-gallery';



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


    state = {
        servicesOffered : [
            {
                imageUrl: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/weddings.JPG',
                description : 'Weddings' 
            },
            {
                imageUrl: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/caterings.JPG',
                description : 'Caterings' 
            },
            {
                imageUrl: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/inaugurations.JPG',
                description : 'Inauguration' 
            },
            {
                imageUrl: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/religious_events.JPG',
                description : 'Religious Events' 
            },
            {
                imageUrl: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/any_other_services.JPG',
                description : 'Other Services' 
            },
            
        ],

        extraImages: [
            {
                original: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_3738.JPG',
                thumbnail: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_3738-thumb.png'
            },
            {
                original: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_3934.JPG',
                thumbnail: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_3934-thumb.png'
            },
            {
                original: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_4135.JPG',
                thumbnail: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_4135-thumb.png'
            },
            {
                original: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_4254.JPG',
                thumbnail: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_4254-thumb.png'
            },
            {
                original: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_4282.JPG',
                thumbnail: 'https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/images/extra-images/IMG_4282-thumb.png'
            }
        ]
    }

    render() {

        const ternaryrowCount = window.screen.width <= 414 ? 1 : 3

        const { servicesOffered, extraImages } = this.state
        return (
            <div>
                <Helmet>
                    <title>IWATA Air Cooler for rent</title>
                    <meta name="description" content="IWATA evaporative air cooler for rent. Beat the heat! Guaranteed to blast cooler air and give comfort to your guests on special events. Great for indoor and outdoor activities." />
                    <meta property="og:title" content="IWATA Air Cooler for rent" />
                </Helmet>

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
                    <Card.Group  itemsPerRow={ternaryrowCount}> 
                            { servicesOffered.map( (service, index) => {
                                return (
                                    <Card raised key={index} className='service-offered' >
                                        <Image src={service.imageUrl} wrapped ui={true} />
                                        <Card.Content>
                                            <h5>{service.description}</h5>
                                        {/* <Card.Meta>
                                            <span className='date'>Joined in 2015</span>
                                        </Card.Meta> */}
                                        {/* <Card.Description>
                                            Matthew is a musician living in Nashville.
                                        </Card.Description> */}
                                        </Card.Content>
                                        <Card.Content extra>

                                        </Card.Content>
                                    </Card>
                                )
                            } ) }

                    </Card.Group>
               </div>



               <div className="ui container gfiao-container" data-aos="fade-right">
                    <h3 className='header3'>
                        Great for Indoor and Outdoor Events
                    </h3>
                    <br/>
                        
                        <ImageGallery
                            items={extraImages} 
                        />
               </div>

            
               <div className="ui container gfiao-container" data-aos="fade-right">
                    <h3 className='header3'>
                        <Icon name='video' alt='video'/>
                    </h3>
                    <br/>
                        

                    <video src="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/videos/video_1.mov" poster="https://rentacoolair.s3-us-west-1.amazonaws.com/defaults/videos/video_1_poster.png" width="100%" height="100%" controls />
                    
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
                        0917-458-3656
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

                        Email us at: <br/>

                        {/* <h4 className='contact-person-header'>Goalbert</h4> <br/> */} <br/>
                        <b>
                            <a href={`mailto:rentacoolair@gmail.com?subject=Inquiry about Iwata Air Cooler&body=<<Insert Your Message Here>>`}>rentacoolair@gmail.com</a>
                        </b>
                        
                    </div>


               </div>


               </div>
               <br/><br/><br/><br/>
            </div>
        );
    }
}

export default LandingPage;
