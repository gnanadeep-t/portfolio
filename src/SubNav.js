import AnchorLink from "react-anchor-link-smooth-scroll";
let SubNav = () => {
  return (
    <div className="overlay-parent">
      <div>
        <AnchorLink offset="100" href="#home">
          Home
        </AnchorLink>
        <AnchorLink offset="100" href="#about">
          About
        </AnchorLink>
        <AnchorLink offset="100" href="#skills">
          Skills
        </AnchorLink>
        <AnchorLink offset="100" href="#projects">
          Projects
        </AnchorLink>
        <AnchorLink offset="100" href="#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  );
};
export default SubNav;
