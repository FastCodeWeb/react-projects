import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
   <footer className="site-footer">
    <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-column">
            <h3 className="footer-logo">SOLEX</h3>
            <p className="footer-description">
                Premium shoes crafted for comfort, style and performance.
                Step into confidence with every move.
            </p>
        </div>

         {/* Column 2 */}
         <div className="footer-column">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
                <li><a href="#">Running Shoes</a></li>
                <li><a href="#">Casual Shoes</a></li>
                <li><a href="#">Sports Shoes</a></li>
                <li><a href="#">Formal Shoes</a></li>
            </ul>
         </div>

         {/* Column 3 */}
         <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Stores</a></li>
                <li><a href="#">Carrers</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
         </div>


        {/* Column 4 */}
         <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
         </div>
    </div>

    {/* Bottom */}
    <div className="footer-bottom">
        <p>&copy;2026 SOLEX. All right reserved.</p>
    </div>
   </footer>
  )
}

export default Footer
