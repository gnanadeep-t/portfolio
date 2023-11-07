let ProjectCard = (props) => {
    return (
      <div className="project-card card">
        <img src={props.img} />
        <h2>{props.title}</h2>
        <h4>{props.techs}</h4>
        <p>{props.des}</p>
        <div>
          <button className="git" onClick={props.fun}>
            Github
          </button>
          <button className="live" onClick={props.fun}>
            Go Live
          </button>
        </div>
      </div>
    );
  };
  export default ProjectCard;
  