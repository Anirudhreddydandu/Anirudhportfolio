import React from "react";
import NavBar from "./NavBar";
import PageContent from "./PageContent";
import "./style.css";
import EducationContent from "./EducationContent";
import SkillsContent from "./SkillsContent";
import IntrestsContent from"./InterestsContent";
import ContactPage from "./ContactPage"
import 'font-awesome/css/font-awesome.min.css';

const App=()=>(
    <div>
        <NavBar/>
        <PageContent/>
        <EducationContent/>
        <SkillsContent/>
        <IntrestsContent/>
        <ContactPage/>
      
       

    </div>

);
export default App;