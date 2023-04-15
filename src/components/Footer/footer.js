import React from 'react'
import logo from '../../images/logo1.png';
import './footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
       <>
        <footer>
        <div className="containner">
            <div className="row">
                <div className="image">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <div className='first-column'>
                    <div className="single-box">
                        <h2 className='h2'>Contact Us</h2>
                            <p className='p1'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                            <p className='p1'>example2020@gmail.com</p>
                            <p className='p1'>(904) 443-0343</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <div className='second-column'>
                    <div className="single-box">
                        <h2 className='h2'>More</h2>
                            <p className='p'>About Us</p>
                           <p className='p'>Products</p> 
                           <p className='p'>Career</p> 
                            <p className='p'>contact Us</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <div className='third-column'>
                    <div className="single-box">
                        <h2 className='h2'>Social Links</h2>
                        <div className='icons'>
                        <InstagramIcon/>
                        <TwitterIcon/>
                        <FacebookIcon/>
                        </div>
                        <div className='last_content'><p className='p'>© 2022 Food Truck Example</p></div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
       </>
    )
}

export default Footer