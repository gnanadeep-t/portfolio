import img from "./images/Programming.png";

let About = () => {
  return (
    <div className="about-con" id="about">
      <h1>About me</h1>
      <div className="about">
        <div className="img">
          <img src={img} className="img" />
        </div>
        <p>
          I am from Hyderabad,Telangana. Web developer, proficient with the MERN
          stack and good at user-centric solutions. Collaborative, team player,
          and proficient in working with interdisciplinary teams and executing
          goal-oriented projects. Strongly interested in obtaining a Software
          Developer position to work on enhancing the product
        </p>
      </div>
    </div>
  );
};
export default About;
