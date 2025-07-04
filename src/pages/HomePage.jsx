
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const HomePage = () => {
   
    return(
            <div id="root">
            <div></div>
            <div className="main-layout">
             <Header/>
             
            <div className="content">
            
            <div className="page-container" style={{overflow:"auto"}}>
            <div className="main-content-scrollable">
            <div className="hero-section">
            
             <img  className="hero-banner-image" src="/Images/college-banner-Cz0xylpt.png" alt="Image" width="1262px"/>
            <div className="hero-overlay-text">
            <h1>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <a className="btn hero-btn" href="/admission"><button>Apply Now!</button></a>
            </div>
            </div>
         
            <p><b>Vivekanand College</b>is a premier educational institution dedicated to fostering academic excelence, unnovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
            <br/><br/>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2>
            

            <ul>
                <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                <li><b>Experienced Faculty:</b>Learn from renowned experts and passionate educators.</li>
                <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><b>Holistic Development:</b>Focus on co-curricular activities, sports, and community service.</li>
                <li><b>Strong Placements:</b>Excellent career opportunities with leading companies.</li>
            </ul>
            <br/>

            <h2>Campus Life & Facilities</h2>
            
            <div className="image-gallery">
            <img src="/Images/students-studying-DbLGuwF_.jpeg" width="600px" height="300px"/>
            <img src="/Images/campus-life-Crkero7B.jpg" width="650px" height="300px"/>
            </div>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <div className="text">
            <p>Ready to explore our courses?</p>
            <div className="buttons">
            <a href="/cources"><button>Explore Cources</button></a>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            </div>
            <Footer/>
            </div>
            
            
        
    )
            
            
            
    
}

export default HomePage;

