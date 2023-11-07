let Contact = () => {
    return (
      <div className="contact" id="contact">
        <h1>Contact me</h1>
        <div>
          <i className="fa-solid fa-mobile"></i>+91-9490860368
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>gnanadeep.t@gmail.com
        </div>
        <span>
          <i className="fa-brands fa-linkedin" onClick={()=>{window.open("https://www.linkedin.com/in/gnanadeep3/")}}></i>
          <i className="fa-brands fa-github" onClick={()=>{window.open("https://github.com/gnanadeep-t")}}></i>
        </span>
      </div>
    );
  };
  export default Contact;
  