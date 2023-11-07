let SkillCard = (props) => {
    return (
      <div className="skill-card card">
        <div className="img">
          <div>{props.logo}</div>
        </div>
        <div>
          <p>{props.text}</p>
        </div>
      </div>
    );
  };
  export default SkillCard;
  