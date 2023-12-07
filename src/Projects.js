import crm from "./project_images/CRM.jpg";
import linkedin from "./project_images/linkedin.jpg";
import mamaearth from "./project_images/mamaearth.jpg";
import paytm from "./project_images/paytm.jpg";
import tmobile from "./project_images/tmobile.jpg";
import zohobooks from "./project_images/zohobooks.jpg";
import ProjectCard from "./ProjectCard";

let Projects = () => {
  const gitLinks=["https://github.com/gnanadeep-t/Fitpeo","https://github.com/gnanadeep-t/zohobooks-clone","https://github.com/gnanadeep-t/linkedin","https://github.com/gnanadeep-t/mamaearth","https://github.com/gnanadeep-t/mamaearth","https://github.com/gnanadeep-t/paytm-clone","https://github.com/gnanadeep-t/brochure","https://github.com/gnanadeep-t/dalearts"]
  const depLinks=["https://csb-swzfrd.vercel.app/","https://zohobooks-clone.vercel.app/","https://linkedin-eta-three.vercel.app/","https://mamaearth-zeta.vercel.app/","https://paytm-clone-omega.vercel.app/","https://brochure-eight.vercel.app/","https://dalearts.vercel.app/"]
  let fun=(i)=>{
    window.open(gitLinks[i])
  }
  let fun1=(i)=>{
    window.open(depLinks[i])
  }
  return (
    <div className="projects-con" id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <ProjectCard
          img={crm}
          title="CRM"
          techs="HTML,CSS,React Js"
          des="Responsive CRM dashboard using React Js with static values. Fetched data from API and displayed in the products section"
          fun={()=>fun(0)}
          fun1={()=>fun1(0)}
        />
        <ProjectCard
          img={zohobooks}
          title="Zoho Books"
          techs="HTML,CSS,Java Script"
          des="Responsive and accurate frontend replica of Zoho Books webpage. Implemented a responsive user interface using CSS Flexbox and media queries "
          fun={()=>fun(1)}
          fun1={()=>fun1(1)}
        />
        <ProjectCard
          img={linkedin}
          title="Linkedin"
          techs="HTML,CSS"
          des="Replica of LinkedIn webpage"
          fun={()=>fun(2)}
          fun1={()=>fun1(2)}
        />
        <ProjectCard
          img={mamaearth}
          title="Mamaearth"
          techs="HTML,CSS"
          des="Replica of Mamaearth webpage"
          fun={()=>fun(3)}
          fun1={()=>fun1(3)}
        />
        <ProjectCard
          img={paytm}
          title="Paytm"
          techs="HTML,CSS"
          des="Replica of Paytm UPI webpage"
          fun={()=>fun(4)}
          fun1={()=>fun1(4)}
        />
        <ProjectCard
          img={tmobile}
          title="tmobile"
          techs="HTML,CSS"
          des="A simple brochure webpage using HTML and CSS"
          fun={()=>fun(5)}
          fun1={()=>fun1(5)}
        />
        <ProjectCard
          img={dalearts}
          title="dalearts"
          techs="HTML,CSS,React Js"
          des="A simple webpage using HTML, CSS and React Js"
          fun={()=>fun(6)}
          fun1={()=>fun1(6)}
        />
      </div>
    </div>
  );
};
export default Projects;
