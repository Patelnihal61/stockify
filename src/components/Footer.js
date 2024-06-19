import React from 'react'
import "../styles/FooterStyle.css";


export default function Footer() {
  return (
    <>
         <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <p>We are a leading Stockify virtual trading platform helping users learn and practice trading in a risk-free environment.</p>
                </div>
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/features">Features</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/guides">Guides</a></li>
                        <li><a href="/news">Stock News</a></li>
                        <li><a href="/webinars">Webinars</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <p>Email: vkdhummad@gmail.com</p>
                    <p>Phone: 972283222</p>
                    <p>Address: Khambhat , Anand </p>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Stockify Virtual Trading Plateform. All Rights Reserved.</p>
            </div>
        </footer>
    </>
  )
}
