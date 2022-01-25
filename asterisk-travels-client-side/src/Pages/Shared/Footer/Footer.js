import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer d-lg-flex justify-content-between bg-dark text-white p-5">
            <div>
                <Link className="navbar-brand border border-white h1 fw-bolder p-2 my-5" to="/"><span className="w-50 text-danger">Asterisk</span> Travels</Link>
                <p className='mt-3'>
                    Asterisk Travels is an independent travels company championing <br /> outdoor lifestyle, environmental stewardship and regenerative living. <br /> We encourage people to connect with the natural world <br /> in meaningful ways so they may become active stewards of our planet.
                </p>
            </div>
            <div>
                <h5>Important Links</h5>
                <ul className="text-start">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/stories">Stories</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/partners">Partnerships</Link></li>
                    <li><Link to="/faq">Frequently Asked Questions</Link></li>
                </ul>
            </div>
            <div>
                <h5>Follow us On Social Media</h5>
                <div className='social-media'>
                    <a href="https://facebook.com/EliusHHimel"><img src="https://i.ibb.co/mXLCjMZ/Facebook.png" alt="Facebook" border="0" /></a>
                    <a href="https://instagram.com/EliusHHimel"><img src="https://i.ibb.co/JsvvSsf/Insta-Gram.png" alt="Insta-Gram" border="0" /></a>
                    <a href="https://linkedin.com/in/hmeliushossainhimel"><img src="https://i.ibb.co/LkQypTq/Linkedin.png" alt="Linkedin" border="0" /></a>
                    <a href="https://pinterest.com/EliusHHimel"><img src="https://i.ibb.co/R2rpvtZ/Pinterest.png" alt="Pinterest" border="0" /></a>
                    <a href="https://twitter.com/EliusHHimel"><img src="https://i.ibb.co/9qgLvDc/Twitter.png" alt="Twitter" border="0" /></a>
                    <a href="https://youtube.com/HmEliusHossainHimel"><img src="https://i.ibb.co/KLJN0Lq/Youtube.png" alt="Youtube" border="0" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;