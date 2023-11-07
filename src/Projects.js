import crm from "./project_images/CRM.jpg";
import linkedin from "./project_images/linkedin.jpg";
import mamaearth from "./project_images/mamaearth.jpg";
import paytm from "./project_images/paytm.jpg";
import tmobile from "./project_images/tmobile.jpg";
import zohobooks from "./project_images/zohobooks.jpg";
import ProjectCard from "./ProjectCard";

let Projects = () => {
  return (
    <div className="projects-con" id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <ProjectCard
          img={crm}
          title="CRM"
          techs="HTML,CSS,React Js"
          des="CRM description"
        />
        <ProjectCard
          img={zohobooks}
          title="Zoho Books"
          techs="HTML,CSS,Java Script"
          des="Zoho books clone"
        />
        <ProjectCard
          img={linkedin}
          title="Linkedin"
          techs="HTML,CSS,Java Script"
          des="Linkedin Clone"
        />
        <ProjectCard
          img={mamaearth}
          title="Mamaearth"
          techs="HTML,CSS,Java Script"
          des="Mamaearth clone"
        />
        <ProjectCard
          img={paytm}
          title="Paytm"
          techs="HTML,CSS,Java Script"
          des="Paytm clone"
        />
        <ProjectCard
          img={tmobile}
          title="tmobile"
          techs="HTML,CSS,Java Script"
          des="Random"
        />
      </div>
    </div>
  );
};
export default Projects;
