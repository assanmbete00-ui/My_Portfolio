import Hero from "./sub_components/hero";
import Education from "./sub_components/educations";
import Experience from "./sub_components/experience";
import Project from "./sub_components/projects";



export default function CV() {
  return (
    <>
      <Hero />
      <Education /> 
      <Experience /> 
      <Project /> 
    </>
  );
}