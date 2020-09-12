import React, { Component } from 'react';

import Logo from '../../../media/images/logos/Logo.png'

class Navbar extends Component {
    render() {
        return (
            <div className='ui container navbar' >
                <img className='company-logo' src={Logo} alt={Logo} />
            </div>
        );
    }
}

export default Navbar;