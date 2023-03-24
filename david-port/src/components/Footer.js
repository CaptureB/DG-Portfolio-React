import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../style/Footer.css"



function Footer() {
    return (
    <div className="footer">
        <div className="links"> 
           <a href="https://github.com/CaptureB">
           <GitHubIcon />
            </a>
           <a href="https://www.linkedin.com/in/david-garcia-88b99026b/">
           <LinkedInIcon />
            </a> 
           <a href="https://instagram.com/capt_ureb?igshid=YmMyMTA2M2Y=">
           <InstagramIcon /> 
            </a>
        </div>
        <p> &copy; 2023 David Garcia</p>
    </div>
    )
}

export default Footer;