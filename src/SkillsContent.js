import React from 'react';
 const SkillsContent =()=>(
<div>
<section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fa fa-html5"></i></li>
                     
                        <li className="list-inline-item"> <i className="fa  fa-css3"></i></li>
                        
                        <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                        <li className="list-inline-item"><i className="fab  fa-react"></i></li>
                        
                    </ul>
                    <div className="subheading mb-3"></div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            HTML
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            CSS
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                          JAVA SCRIPT
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                           ANGULAR
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                           REACT
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
</div>
 );
 export default SkillsContent;