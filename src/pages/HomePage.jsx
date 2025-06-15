import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div>
            <Header/>
            <h1>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>

             <a href="https://vck-ojt.vercel.app/admissions"><button>Apply Now!</button></a>
            <p><b>Vivekanand College</b>is a premier educational institution dedicated to fostering academic excelence, unnovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
            <br/><br/>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h1>Why Choose Vivekanand College?</h1>
            <hr/>

            <ul>
                <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                <li><b>Experienced Faculty:</b>Learn from renowned experts and passionate educators.</li>
                <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><b>Holistic Development:</b>Focus on co-curricular activities, sports, and community service.</li>
                <li><b>Strong Placements:</b>Excellent career opportunities with leading companies.</li>
            </ul>
            <br/>

            <h1>Campus Life & Facilities</h1>
            <hr/>
            <img src="https://vck-ojt.vercel.app/assets/students-studying-DbLGuwF_.jpeg" width="600px"/>
            <img src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" width="600px" height="300px"/>
            <br/>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <p>Ready to explore our courses?</p>
            <a href="https://vck-ojt.vercel.app/courses"><button>Explore Cources</button></a>
        </div>
    ) 
}

export default HomePage;