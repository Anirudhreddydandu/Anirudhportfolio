import react from "react";
const EducationContent =()=>(
    <div>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">malla reddy engineering college</h3>
                            <div className="subheading mb-3">bachelor of technology</div>
                            <div>Information technology (IT)</div>
                            <p>GPA: 5.75</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2016 -  Sep 2020</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Narayana junior college</h3>
                            <div className="subheading mb-3">Intermediate</div>
                            <p>Marks: 747/1000</p>
                        </div>
                        <div className="flex-shrink-0"><span class="text-primary">August 2014 - May 2016</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Bhashyam public school</h3>
                            <div className="subheading mb-3"></div>
                            <p>CGPA: 7.0</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2013 - March 2014</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
    </div>
    
)
export default EducationContent;