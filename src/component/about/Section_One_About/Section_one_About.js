
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import slash from "../image/slash.png"


import {Col, Row, Card} from 'react-bootstrap';

function Section_one_About() {
    return(
        <div className="py-5">
            <h1 className="display-3 pt-5 pb-2 text-center text-muted">Overview</h1>

            <hr className="solid_about" />

            <p className="px-5 py-2">National Institute of Textile Engineering and Research (NITER) is the first education institute running as a Public-Private-Partnership (PPP) organization under the Ministry of Textiles & Jute, GoB. It is located in its own campus at Nayarhat, Savar, Dhaka adjacent to the Dhaka-Aricha highway and enjoys excellent communication facilities connecting among important cities of the country. The total campus area of NITER is 13.06 Acres with adequate built up space in its academic, administrative, hostels, Canteen and other buildings.</p>
            <p className="px-5 py-2">As per the decision of the Ministry of Textiles & Jute, NITER has been running under the management of ‘Bangladesh Textile Mills Association (BTMA)’ since September 2008. An operational agreement was signed between ‘Bangladesh Textile Mills Association (BTMA)’ and ‘Bangladesh Textile Mills Corporation (BTMC)’ under the Ministry of Textiles & Jute. After signing the agreement, BTMA actively took the responsibilities of NITER on May, 2009. That time it was known as ‘National Institute of Textile Training Research and Design (NITTRAD)’.</p>
        </div>
        
    )
}
export default Section_one_About;