import img from "./images/Code_thinking.png";

let Home = () => {
  return (
    <div className="home" id="home">
      <div className="img">
        <img src={img} className="img" />
      </div>
      <div>
        <span className="text">
          <h2>Hello, I am Gnanadeep</h2>
          <p>Full Stack Web Developer</p>
        </span>
      </div>
    </div>
  );
};
export default Home;
