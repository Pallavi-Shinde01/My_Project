import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div id="root">
            <div></div>
            <div className="main-layout">
                <Header/>
                <div className="content">
                <div className="page-container" style={{overflow:"auto"}}>
                <div className="main-content-scrollable">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            
            <h2>General Enquiries</h2>
            
            <p><b>Vivekanand College Main Campus</b></p>
            <p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]</p>
            <p>India</p>
            
            <p>Phone:<b> +91 12345 67890</b></p>
            <p>Email: <b>info@vivekanandcollege.edu</b></p>
            <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

            <h2>Admissions Office</h2>
        
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: admissions@vivekanandcollege.edu</p>

            <h2>Student Support Services</h2>
            
            <p>For current student support, academic advising, or general assistance:</p>
            <p>Phone: +91 87654 32109</p>
            <p>Email: studentsupport@vivekanandcollege.edu</p>

            <h2>Find Us on the Map</h2>
            <br/>
            

            <a className="map"  href="https://www.google.com/maps/search/Vivekanand+College/@21.1508573,79.0724541,8z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
            <h2>Send Us a Message</h2>
            
            
            <p>[A contact from with fields for Name, Email Subjects,Message can be here.]</p>
            </div>
            </div>
            </div>
            </div>  
            <Footer/>          
        </div>
    )            

}

export default ContactPage;

