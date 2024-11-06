import React from 'react';
import './Header.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (      
  
   <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
       
      <h2 className='h1'>WEATHER APP</h2>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default Header