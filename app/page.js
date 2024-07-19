import Articles from "./components/Articles";
import ContactForm from "./components/Contactform";
import ProfileOverView from "./components/ProfileOverView";
import Project from "./components/Project";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";


export default function Home() {
  return (
    <>

    <ProfileOverView />
    <Project />
    <Skills />
    <WorkExperience />
    <Articles />
    <ContactForm />
    
    </>
    );
}
